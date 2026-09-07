import { getLang, localize } from "./i18n.js";

export function renderExperiences(experiences) {
  const list = document.querySelector("#experience-list");
  if (!list) return;
  list.replaceChildren();

  experiences.forEach((experience) => {
    const article = document.createElement("article");

    const jobTitle = document.createElement("h4");
    jobTitle.textContent = localize(experience.jobTitle);

    const company = document.createElement("strong");
    company.textContent = experience.company;
    company.classList.add("strong-text");

    const jobDuration = document.createElement("small");
    jobDuration.textContent = localize(experience.date);

    const listResponsibilities = document.createElement("ul");
    localizeList(experience.responsibilities).forEach((responsibility) => {
      const responsibilityItem = document.createElement("li");
      responsibilityItem.classList.add("text-description");
      responsibilityItem.textContent = responsibility;
      listResponsibilities.appendChild(responsibilityItem);
    });

    const div = document.createElement("div");
    div.appendChild(jobTitle);
    div.appendChild(jobDuration);
    article.appendChild(div);
    article.appendChild(company);
    article.appendChild(listResponsibilities);

    list.appendChild(article);
  });
}

function localizeList(value) {
  if (Array.isArray(value)) return value;
  return value?.[getLang()] ?? value?.es ?? [];
}
