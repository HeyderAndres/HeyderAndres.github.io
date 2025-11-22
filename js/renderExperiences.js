export function renderExperiences(experiences) {
  const experienceSection = document.querySelector("#experience-section");

  experiences.forEach((experience) => {
    const article = document.createElement("article");

    const jobTitle = document.createElement("h4");
    jobTitle.textContent = experience.jobTitle;

    const company = document.createElement("strong");
    company.textContent = experience.company;

    const jobDuration = document.createElement("small");
    jobDuration.textContent = experience.date;

    const listResposibilities = document.createElement("ul");
    experience.responsibilities.forEach((responsibility) => {
      const responsibilityItem = document.createElement("li");
      responsibilityItem.textContent = responsibility;
      listResposibilities.appendChild(responsibilityItem);
    });

    const div = document.createElement("div");

    div.appendChild(jobTitle);
    div.appendChild(jobDuration);
    article.appendChild(div);
    article.appendChild(company);
    article.appendChild(listResposibilities);

    experienceSection.appendChild(article);
  });
}
