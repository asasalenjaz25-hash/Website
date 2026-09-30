// HTML -> JSX porter for the Repio theme.
// Parses each source page, rewrites asset/link URLs, and emits a real
// React component tree (no dangerouslySetInnerHTML) per App Router route.
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import { rewriteNav } from "./nav-services.mjs";
import { replaceHeaders } from "./site-header.mjs";
import { rewriteBrand } from "./brand.mjs";
import { replaceChrome } from "./site-chrome.mjs";

const SRC = "/Users/arshsid/Desktop/wowtheme7-com/wowtheme7.com/tf/repio";
const OUT = path.resolve("app");

const VOID = new Set([
  "area","base","br","col","embed","hr","img","input","link","meta",
  "param","source","track","wbr",
]);

const BOOL = new Set([
  "checked","selected","disabled","readonly","required","autoplay","muted",
  "loop","controls","multiple","novalidate","open","playsinline","default",
  "reversed","autofocus","itemscope",
]);

// html attribute -> JSX prop
const ATTR = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  colspan: "colSpan",
  rowspan: "rowSpan",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  novalidate: "noValidate",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  usemap: "useMap",
  enctype: "encType",
  accesskey: "accessKey",
  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
  datetime: "dateTime",
  "http-equiv": "httpEquiv",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  formaction: "formAction",
  srclang: "srcLang",
  charset: "charSet",
  // SVG presentation attributes
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-rule": "fillRule",
  "fill-opacity": "fillOpacity",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-weight": "fontWeight",
  "text-anchor": "textAnchor",
  "dominant-baseline": "dominantBaseline",
  "color-interpolation-filters": "colorInterpolationFilters",
};

const DROP_ATTR = new Set(["xmlns:xlink"]);

function camel(prop) {
  if (prop.startsWith("--")) return prop;
  return prop.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleToObject(value) {
  const out = {};
  // split on ; not inside url(...) or quotes
  let depth = 0, cur = "", parts = [];
  for (const ch of value) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { parts.push(cur); cur = ""; continue; }
    cur += ch;
  }
  parts.push(cur);
  for (const part of parts) {
    const i = part.indexOf(":");
    if (i === -1) continue;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (!k || !v) continue;
    out[camel(k)] = v;
  }
  return out;
}

// ---- URL rewriting -------------------------------------------------------
export function routeFor(file) {
  const base = file.replace(/\.html$/, "");
  return base === "index" ? "/" : "/" + base;
}

function rewriteUrl(url) {
  if (!url) return url;
  const u = url.trim();
  if (/^(https?:|mailto:|tel:|data:|#|\/\/)/i.test(u)) return url;
  if (u.startsWith("assets/")) return "/" + u;
  if (u.startsWith("./assets/")) return "/" + u.slice(2);
  const m = u.match(/^([a-z0-9-]+)\.html(#.*)?$/i);
  if (m) return routeFor(m[1] + ".html") + (m[2] || "");
  return url;
}

const URL_ATTRS = new Set(["href", "src", "poster", "data-bg", "data-background-image", "action"]);

// ---- JSX emission --------------------------------------------------------
function escapeText(t) {
  return t.replace(/([{}])/g, "{'$1'}").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function emitAttrs(node) {
  const out = [];
  const attrs = node.attributes || {};
  for (const [rawName, rawValue] of Object.entries(attrs)) {
    const lower = rawName.toLowerCase();
    if (DROP_ATTR.has(lower)) continue;
    if (lower.startsWith("on")) continue; // inline handlers: theme has none of note
    let value = rawValue;
    if (URL_ATTRS.has(lower)) value = rewriteUrl(value);
    if (lower === "style") {
      const obj = styleToObject(value);
      if (!Object.keys(obj).length) continue;
      out.push(`style={${JSON.stringify(obj)}}`);
      continue;
    }
    const name = ATTR[lower] || (lower.startsWith("data-") || lower.startsWith("aria-") ? lower : rawName);
    if (BOOL.has(lower) && (value === "" || value.toLowerCase() === lower)) {
      out.push(`${name}={true}`);
      continue;
    }
    out.push(`${name}={${JSON.stringify(value)}}`);
  }
  return out.length ? " " + out.join(" ") : "";
}

function emit(node, indent = "  ") {
  // element
  if (node.nodeType === 1) {
    const tag = node.rawTagName;
    if (!tag) return "";
    const t = tag.toLowerCase();
    if (t === "script" || t === "noscript") return "";
    const attrs = emitAttrs(node);
    if (VOID.has(t)) return `${indent}<${tag}${attrs} />\n`;
    if (t === "style") {
      const css = node.rawText;
      return `${indent}<style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(css)} }} />\n`;
    }
    const kids = node.childNodes.map((c) => emit(c, indent + "  ")).join("");
    if (!kids.trim()) return `${indent}<${tag}${attrs}></${tag}>\n`;
    return `${indent}<${tag}${attrs}>\n${kids}${indent}</${tag}>\n`;
  }
  // text
  if (node.nodeType === 3) {
    const raw = node.rawText;
    if (!raw.trim()) return "";
    return `${indent}${escapeText(raw.trim())}\n`;
  }
  return ""; // comments dropped
}

// ---- page build ----------------------------------------------------------
const files = fs
  .readdirSync(SRC)
  .filter((f) => f.endsWith(".html"))
  .sort();

const pages = [];

// Each home variant is really a themed trade page. We expose every one of them
// as a dedicated service route (/services/<slug>) so the service section links
// to a service page rather than to a home page. The home routes are kept too.
// Titles come from the theme's own mega-menu labels.
export const SERVICE_PAGES = [
  { file: "index.html",    slug: "plumbing-service",        title: "Plumbing Service",         img: "home-img8.jpg" },
  { file: "index-2.html",  slug: "laundry-service",         title: "Laundry Service",          img: "home-img9.jpg" },
  { file: "index-3.html",  slug: "repair-service",          title: "Repair Service",           img: "home-img10.jpg" },
  { file: "index-4.html",  slug: "cleaning-service",        title: "Cleaning Service One",     img: "home-img1.jpg" },
  { file: "index-5.html",  slug: "air-conditioning-service",title: "Air Conditioning Service", img: "home-img11.jpg" },
  { file: "index-6.html",  slug: "cleaning-service-two",    title: "Cleaning Service Two",     img: "home-img2.jpg" },
  { file: "index-7.html",  slug: "air-conditioning",        title: "Air Conditioning",         img: "home-img3.jpg" },
  { file: "index-8.html",  slug: "handyman",                title: "Handyman",                 img: "home-img4.jpg" },
  { file: "index-9.html",  slug: "computer-mobile-repair",  title: "Computer & Mobile Repair", img: "home-img5.jpg" },
  { file: "index-10.html", slug: "roofing-services",        title: "Roofing Services",         img: "home-img6.jpg" },
  { file: "index-11.html", slug: "electrical-service",      title: "Electrical Service",       img: "home-img7.jpg" },
];
const BY_FILE = new Map(SERVICE_PAGES.map((s) => [s.file, s]));

const SHARED = path.resolve("components/generated");
fs.rmSync(SHARED, { recursive: true, force: true });
fs.mkdirSync(SHARED, { recursive: true });

for (const file of files) {
  const html = fs.readFileSync(path.join(SRC, file), "utf8");
  const root = parse(html, { comment: false, blockTextElements: { script: true, style: true } });
  const body = root.querySelector("body");
  const head = root.querySelector("head");
  const title = head?.querySelector("title")?.rawText?.trim() || "Repio";
  const desc = head?.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  const bodyClass = body.getAttribute("class") || "";

  let jsx = rewriteBrand(replaceChrome(replaceHeaders(rewriteNav(body.childNodes.map((c) => emit(c, "      ")).join("")))));

  // The service page additionally lists every trade template.
  // Injected right before the footer so it sits inside the page flow.
  let extraImports = ["SiteHeader", "SiteMobileMenu", "SiteFooter"]
    .filter((c) => jsx.includes(`<${c} />`))
    .map((c) => `import ${c} from "@/components/${c}";\n`)
    .join("");
  if (file === "service.html") {
    extraImports += 'import HomeTemplates from "@/components/HomeTemplates";\n';
    const footerAt = jsx.search(/^\s*<footer[\s>]/m);
    const marker = "      <HomeTemplates />\n";
    jsx = footerAt === -1 ? jsx + marker : jsx.slice(0, footerAt) + marker + jsx.slice(footerAt);
  }

  // The markup lives in ONE shared component so a trade page and its home
  // route render byte-identical output without duplicating the JSX.
  const name = "Page_" + file.replace(/[^a-z0-9]/gi, "_");
  fs.writeFileSync(
    path.join(SHARED, `${name}.jsx`),
    `// Ported from ${file} — markup preserved verbatim. Generated; do not edit.
import BodyClass from "@/components/BodyClass";
${extraImports}
export default function ${name}() {
  return (
    <>
      <BodyClass value={${JSON.stringify(bodyClass)}} />
${jsx}    </>
  );
}
`
  );

  const writeRoute = (routePath, meta) => {
    const dir = routePath === "/" ? OUT : path.join(OUT, routePath.slice(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, "page.jsx"),
      `import ${name} from "@/components/generated/${name}";

export const metadata = {
  title: ${JSON.stringify(meta.title)},
  description: ${JSON.stringify(meta.desc)},
};

export default function Page() {
  return <${name} />;
}
`
    );
  };

  const route = routeFor(file);
  writeRoute(route, { title, desc });
  pages.push({ file, route, title });

  // Same markup, served as a real service page with its own trade metadata.
  const svc = BY_FILE.get(file);
  if (svc) {
    const sroute = `/services/${svc.slug}`;
    writeRoute(sroute, {
      title: `${svc.title} - Repio`,
      desc: desc || `${svc.title} services by Repio.`,
    });
    pages.push({ file, route: sroute, title: svc.title, service: true });
  }
}

fs.writeFileSync("pages.generated.json", JSON.stringify(pages, null, 2));
console.log(`converted ${pages.length} pages`);
for (const p of pages) console.log(` ${p.file.padEnd(24)} -> ${p.route}`);
