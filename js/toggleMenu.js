import { t } from "./i18n.js";

const toggle = document.querySelector("#toggle-menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector("#overlay");
const body = document.body;

function isOpen() {
  return nav?.classList.contains("menu-open");
}

function setOpen(open) {
  nav?.classList.toggle("menu-open", open);
  body.classList.toggle("menu-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? t("menu.close") : t("menu.open"));
}

function closeMenu() {
  setOpen(false);
}

nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

toggle?.addEventListener("click", () => {
  setOpen(!isOpen());
});

overlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isOpen()) closeMenu();
});

document.addEventListener("langchange", () => {
  toggle?.setAttribute("aria-label", isOpen() ? t("menu.close") : t("menu.open"));
});
