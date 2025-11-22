export function renderSkills(skills) {
  const frontendDiv = document.querySelector("#frontend");
  const backendDiv = document.querySelector("#backend");
  const toolsDiv = document.querySelector("#tools");

  frontendDiv.appendChild(createSkillGroup(skills.FrontEnd));
  backendDiv.appendChild(createSkillGroup(skills.BackEnd));
  toolsDiv.appendChild(createSkillGroup(skills.ToolsAndDevOps));
}

function createSkillGroup(skillsGroup) {
  const listSkills = document.createElement("ul");

  skillsGroup.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    listSkills.appendChild(skillItem);
  });

  return listSkills;
}