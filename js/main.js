import { initI18n } from "./i18n.js";
import { initContent } from "./fetchData.js";
import "./contact.js";
import "./toggleMenu.js";

await initI18n();
await initContent();
