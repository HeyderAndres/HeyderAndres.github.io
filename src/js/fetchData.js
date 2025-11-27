import { renderProyects } from "./renderProyects.js";
import { renderExperiences } from "./renderExperiences.js";
import { renderSkills } from "./renderSkills.js";

const proyects = await getData('./data/proyects.json');
renderProyects(proyects);

const experiences = await getData('./data/experience.json');
renderExperiences(experiences);

const skills = await getData('./data/skills.json');
renderSkills(skills);

async function getData(jsonPath){
    return await fetch(jsonPath)
    .then(response => response.json());
}







