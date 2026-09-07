import { renderProyects } from "./renderProyects.js";
import { renderExperiences } from "./renderExperiences.js";
import { renderSkills } from "./renderSkills.js";

let cache = null;

async function getData(jsonPath) {
  const response = await fetch(jsonPath);
  return response.json();
}

export async function initContent() {
  if (!cache) {
    const [proyects, experiences, skills] = await Promise.all([
      getData("./data/proyects.json"),
      getData("./data/experience.json"),
      getData("./data/skills.json"),
    ]);
    cache = { proyects, experiences, skills };
  }
  renderAll();
  document.addEventListener("langchange", renderAll);
}

function renderAll() {
  if (!cache) return;
  renderProyects(cache.proyects);
  renderExperiences(cache.experiences);
  renderSkills(cache.skills);
}
