const STORAGE_KEY = "lang";

let dictionaries = { es: {}, en: {} };
let currentLang = "es";

export function getLang() {
  return currentLang;
}

export function t(key) {
  return dictionaries[currentLang]?.[key] ?? dictionaries.es[key] ?? key;
}

export function localize(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[currentLang] ?? value.es ?? "";
}

function detectLang() {
  const query = new URLSearchParams(location.search).get("lang");
  if (query === "en" || query === "es") return query;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return "es";
}

function syncUrl(lang) {
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

function applyMeta() {
  document.title = t("meta.title");
  const description = t("meta.description");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", t("meta.title"));
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description);
  document.documentElement.lang = currentLang;
}

export function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.setAttribute("alt", t(el.dataset.i18nAlt));
  });
  applyMeta();
}

export function setLang(lang) {
  currentLang = lang === "en" ? "en" : "es";
  localStorage.setItem(STORAGE_KEY, currentLang);
  syncUrl(currentLang);
  applyStaticI18n();
  document.dispatchEvent(new CustomEvent("langchange", { detail: currentLang }));
}

export async function initI18n() {
  const response = await fetch("./data/i18n.json");
  dictionaries = await response.json();
  currentLang = detectLang();
  localStorage.setItem(STORAGE_KEY, currentLang);
  syncUrl(currentLang);
  applyStaticI18n();
  document
    .querySelector("#toggle-menu")
    ?.setAttribute("aria-label", t("menu.open"));

  document.querySelector("#lang-toggle")?.addEventListener("click", () => {
    setLang(currentLang === "es" ? "en" : "es");
  });
}
