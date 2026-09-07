export function renderSkills(skills) {
  replaceGroup("#frontend", skills.FrontEnd);
  replaceGroup("#backend", skills.BackEnd);
  replaceGroup("#tools", skills.ToolsAndDevOps);
}

function replaceGroup(selector, skillsGroup) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.querySelector("ul")?.remove();
  container.appendChild(createSkillGroup(skillsGroup));
}

function createSkillGroup(skillsGroup) {
  const listSkills = document.createElement("ul");

  skillsGroup.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillItem.classList.add("text-description");
    listSkills.appendChild(skillItem);
  });

  return listSkills;
}
