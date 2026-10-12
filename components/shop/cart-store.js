import { useSyncExternalStore } from "react";
import { getSku, MAX_QTY } from "./catalog";

// The cart lives in localStorage because every page is a full page load
// (site links are plain <a href>). Lines are [{ sku, qty, install }], where
// `install` adds installation to a product line. Prices are never stored, they
// come from catalog.js. Client components only.

const KEY = "asas-cart-v2";
const CHANGE = "asas-cart-change";
const EMPTY = [];

let snapshot = null;

const clampQty = (qty) => {
  const n = Math.floor(Number(qty));
  return Number.isFinite(n) ? Math.min(MAX_QTY, Math.max(1, n)) : 1;
};

function read() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
    if (!Array.isArray(parsed)) return EMPTY;
    const seen = new Set();
    const lines = [];
    for (const line of parsed) {
      const sku = getSku(line?.sku);
      if (!sku || seen.has(sku.id)) continue;
      seen.add(sku.id);
      lines.push({ sku: sku.id, qty: clampQty(line.qty), install: Boolean(line.install && sku.installPrice) });
    }
    return lines;
  } catch {
    return EMPTY;
  }
}

function write(lines) {
  snapshot = lines;
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* private mode or storage full: the cart still works for this page */
  }
  window.dispatchEvent(new Event(CHANGE));
}

function getSnapshot() {
  if (snapshot === null) snapshot = read();
  return snapshot;
}

const getServerSnapshot = () => EMPTY;

function subscribe(onChange) {
  const onStorage = (event) => {
    if (event.key === null || event.key === KEY) {
      snapshot = null; // another tab changed the cart
      onChange();
    }
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CHANGE, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CHANGE, onChange);
  };
}

// Adding a product that's already in the cart adds to its quantity; asking for
// installation turns it on for that line (never off).
export function addToCart(sku, qty = 1, install = false) {
  const item = getSku(sku);
  if (!item) return;
  const withInstall = Boolean(install && item.installPrice);
  const lines = getSnapshot();
  const existing = lines.find((l) => l.sku === sku);
  write(
    existing
      ? lines.map((l) => (l.sku === sku ? { ...l, qty: clampQty(l.qty + qty), install: l.install || withInstall } : l))
      : [...lines, { sku, qty: clampQty(qty), install: withInstall }]
  );
}

export function setInstall(sku, install) {
  write(getSnapshot().map((l) => (l.sku === sku ? { ...l, install: Boolean(install && getSku(sku)?.installPrice) } : l)));
}

export function setQty(sku, qty) {
  write(getSnapshot().map((l) => (l.sku === sku ? { ...l, qty: clampQty(qty) } : l)));
}

export function removeFromCart(sku) {
  write(getSnapshot().filter((l) => l.sku !== sku));
}

export function clearCart() {
  write(EMPTY);
}

export function useCart() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const noopSubscribe = () => () => {};

// False during server render and hydration, true after: lets cart views show
// a neutral state instead of flashing "empty" before localStorage is read.
export function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}
