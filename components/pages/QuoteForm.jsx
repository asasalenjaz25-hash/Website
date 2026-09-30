"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/components/site";
import styles from "./QuoteForm.module.css";

// There is no backend: the form checks the required fields, then hands the
// request to the visitor's email app (mailto:) or to WhatsApp, pre-filled.

const PROJECT_TYPES = ["Fit-out", "MEP works", "Villa works", "EV charger", "Other"];
const PROPERTY_TYPES = ["Office", "Restaurant", "Retail", "Villa", "Warehouse", "Other"];
const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Other"];

const WHATSAPP_NUMBER = COMPANY.phones[0].tel.replace(/\D/g, "");

const EMPTY = {
  name: "",
  company: "",
  phone: "",
  email: "",
  projectType: "",
  propertyType: "",
  emirate: "",
  area: "",
  size: "",
  visitDate: "",
  message: "",
};

const LABELS = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  projectType: "Project type",
  propertyType: "Property type",
  emirate: "Emirate",
  area: "Area / community",
  message: "Project details",
};

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.phone.trim()) e.phone = "Please enter a phone number.";
  else if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.projectType) e.projectType = "Please choose a project type.";
  if (!v.propertyType) e.propertyType = "Please choose a property type.";
  if (!v.emirate) e.emirate = "Please choose an emirate.";
  if (!v.area.trim()) e.area = "Please enter the area or community.";
  if (!v.message.trim()) e.message = "Please tell us a little about the project.";
  return e;
}

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return d && m && y ? `${d}/${m}/${y}` : iso;
}

function summaryLines(v) {
  return [
    `Name: ${v.name.trim()}`,
    `Company: ${v.company.trim() || "-"}`,
    `Phone: ${v.phone.trim()}`,
    `Email: ${v.email.trim()}`,
    `Project type: ${v.projectType}`,
    `Property type: ${v.propertyType}`,
    `Location: ${v.area.trim()}, ${v.emirate}`,
    `Approximate area: ${v.size.trim() ? `${v.size.trim()} sq ft` : "-"}`,
    `Preferred site-visit date: ${formatDate(v.visitDate) || "-"}`,
    "",
    "Project details:",
    v.message.trim(),
  ];
}

export default function QuoteForm({ idPrefix = "quote" }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "email" | "whatsapp" | null
  const [minDate, setMinDate] = useState(undefined);
  const summaryRef = useRef(null);
  const id = (name) => `${idPrefix}-${name}`;

  // Set after mount so server and client HTML match.
  useEffect(() => {
    const t = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    setMinDate(`${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`);
  }, []);

  const set = (name) => (event) => {
    const value = event.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  function check() {
    const found = validate(values);
    setErrors(found);
    const keys = Object.keys(found);
    if (keys.length) {
      setStatus(null);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return false;
    }
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!check()) return;
    const subject = `Quote request – ${values.projectType} – ${values.name.trim()}`;
    const body = ["Quote request from the ASAS Alenjaz website", "", ...summaryLines(values)].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("email");
  }

  function handleWhatsApp() {
    if (!check()) return;
    const text = ["Hello ASAS Alenjaz, I would like a quotation.", "", ...summaryLines(values)].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
  }

  const errorKeys = Object.keys(errors).filter((k) => errors[k]);

  const describedBy = (name) => (errors[name] ? id(`${name}-error`) : undefined);

  const fieldError = (name) =>
    errors[name] ? (
      <span id={id(`${name}-error`)} className={styles.error}>
        {errors[name]}
      </span>
    ) : null;

  // Markup follows the template's booking form (contact-two-form, form-control,
  // trailing icon); the focus ring and error state come from QuoteForm.module.css.
  const inputClass = (name, extra = "") =>
    `form-control bg-transparent text-heading tw-py-3 tw-ps-5 ${extra} w-100 tw-rounded-md ${styles.input}`;

  const textField = (name, label, { type = "text", required = true, autoComplete, inputMode, placeholder, min, icon } = {}) => (
    <div className={`contact-two-form tw-mb-4 ${styles.field}`}>
      <label htmlFor={id(name)} className="tw-mb-3">
        {label} {required ? <span className={styles.req} aria-hidden="true">*</span> : <span className={styles.optional}>(optional)</span>}
      </label>
      <div className="position-relative z-1">
        <input
          id={id(name)}
          name={name}
          type={type}
          className={inputClass(name, icon ? "tw-pe-15" : "tw-pe-5")}
          value={values[name]}
          onChange={set(name)}
          required={required}
          aria-required={required || undefined}
          aria-invalid={errors[name] ? "true" : undefined}
          aria-describedby={describedBy(name)}
          autoComplete={autoComplete}
          inputMode={inputMode}
          placeholder={placeholder}
          min={min}
        />
        {icon ? (
          <span className={`position-absolute top-50 translate-middle-y end-0 tw-me-4 tw-text-xl ${styles.inputIcon}`} aria-hidden="true">
            <i className={`ph ${icon}`}></i>
          </span>
        ) : null}
      </div>
      {fieldError(name)}
    </div>
  );

  const pillGroup = (name, legend, options) => (
    <fieldset
      className={styles.fieldset}
      aria-invalid={errors[name] ? "true" : undefined}
      aria-describedby={describedBy(name)}
    >
      <legend className={`tw-mb-3 ${styles.legend}`}>
        {legend} <span className={styles.req} aria-hidden="true">*</span>
      </legend>
      <div className={styles.pills}>
        {options.map((option) => (
          <label key={option} className={styles.pill}>
            <input
              type="radio"
              name={id(name)}
              value={option}
              checked={values[name] === option}
              onChange={set(name)}
              required
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {fieldError(name)}
    </fieldset>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Request a quote">
      {errorKeys.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} className={styles.summary} role="alert">
          <strong>Please check the following:</strong>
          <ul className="mb-0 mt-2 ps-3" style={{ listStyle: "disc" }}>
            {errorKeys.map((k) => (
              <li key={k}>
                <a href={`#${id(k)}`} onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id(k)) || document.querySelector(`input[name="${id(k)}"]`);
                  el?.focus();
                }}>
                  {LABELS[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="row">
        <div className="col-md-6">{textField("name", "Your name", { autoComplete: "name", icon: "ph-user" })}</div>
        <div className="col-md-6">{textField("company", "Company", { required: false, autoComplete: "organization", icon: "ph-buildings" })}</div>
        <div className="col-md-6">{textField("phone", "Phone", { type: "tel", autoComplete: "tel", inputMode: "tel", placeholder: "05X XXX XXXX", icon: "ph-phone" })}</div>
        <div className="col-md-6">{textField("email", "Email", { type: "email", autoComplete: "email", icon: "ph-envelope" })}</div>
      </div>

      {pillGroup("projectType", "Project type", PROJECT_TYPES)}
      {pillGroup("propertyType", "Property type", PROPERTY_TYPES)}
      {pillGroup("emirate", "Emirate", EMIRATES)}

      <div className="row">
        <div className="col-md-6">{textField("area", "Area / community", { autoComplete: "address-level2", placeholder: "e.g. Business Bay", icon: "ph-map-pin" })}</div>
        <div className="col-md-6">{textField("size", "Approximate area (sq ft)", { required: false, inputMode: "numeric" })}</div>
        <div className="col-md-6">{textField("visitDate", "Preferred site-visit date", { type: "date", required: false, min: minDate })}</div>
      </div>

      <div className={`contact-two-form tw-mb-4 ${styles.field}`}>
        <label htmlFor={id("message")} className="tw-mb-3">
          Project details <span className={styles.req} aria-hidden="true">*</span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          className={`form-control bg-transparent text-heading tw-py-4 tw-ps-5 tw-pe-5 w-100 tw-h-148-px tw-rounded-md ${styles.input}`}
          value={values.message}
          onChange={set("message")}
          required
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={describedBy("message")}
          placeholder="Scope of work, current condition of the space, drawings you have, timing…"
        />
        {fieldError("message")}
      </div>

      <div className={styles.actions}>
        <button type="submit" className="w-100 tw-primary-btn d-inline-flex align-items-center justify-content-center lh-1 fw-semibold bg-main-eight-600 text-white tw-rounded-4xl position-relative z-1">
          <span className="btn_inner position-relative z-1 w-100 text-center">
            <span className="btn_icon d-inline-flex align-items-center justify-content-center position-absolute end-0 top-0 h-100 z-2 lh-1 text-heading tw-text-lg">
              <span className="overflow-hidden position-relative d-inline-flex">
                <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
                <i className="ph-bold ph-arrow-right" aria-hidden="true"></i>
              </span>
            </span>
            <span className="btn_text d-inline-flex overflow-hidden text-white">
              <span className="d-flex align-items-center tw-transition-5 text-capitalize">Send by email</span>
            </span>
          </span>
        </button>
        <button type="button" className={styles.whatsapp} onClick={handleWhatsApp}>
          <i className="ph ph-whatsapp-logo" aria-hidden="true"></i>
          Send via WhatsApp
        </button>
      </div>

      <p className={styles.note}>
        &ldquo;Send by email&rdquo; opens your own email app with your request filled in, ready for you to send to{" "}
        {COMPANY.email}. &ldquo;Send via WhatsApp&rdquo; opens a WhatsApp chat with {COMPANY.phones[0].label}. Nothing is sent until you press send there.
      </p>

      <div aria-live="polite">
        {status === "email" && (
          <p className={styles.status}>
            Your email app should now be open with the request ready to send. If nothing opened, email us at{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or call{" "}
            <a href={`tel:${COMPANY.phones[0].tel}`}>{COMPANY.phones[0].label}</a>.
          </p>
        )}
        {status === "whatsapp" && (
          <p className={styles.status}>
            WhatsApp should have opened in a new tab with your request. If it didn&rsquo;t, call us on{" "}
            <a href={`tel:${COMPANY.phones[0].tel}`}>{COMPANY.phones[0].label}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
