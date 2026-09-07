import { localize, t } from "./i18n.js";

export function renderProyects(proyects) {
  const footerProyects = document.querySelector("#projects-list");
  if (!footerProyects) return;
  footerProyects.replaceChildren();

  proyects.forEach((proyect) => {
    const article = document.createElement("article");
    article.className = "project-card";

    if (proyect.imageUrl) {
      const img = document.createElement("img");
      img.loading = "lazy";
      img.src = proyect.imageUrl;
      img.alt = localize(proyect.name);
      article.appendChild(img);
    }

    const proyectName = document.createElement("h4");
    proyectName.textContent = localize(proyect.name);

    if (proyect.gitHubUrl) {
      const a = document.createElement("a");
      a.href = proyect.gitHubUrl;
      a.classList.add("link");
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(proyectName);
      article.appendChild(a);
    } else {
      article.appendChild(proyectName);
    }

    const proyectDescription = document.createElement("p");
    proyectDescription.textContent = localize(proyect.description);
    article.appendChild(proyectDescription);

    const technologies = document.createElement("div");
    proyect.technologies.forEach((tech) => {
      const span = document.createElement("span");
      span.textContent = tech;
      technologies.appendChild(span);
    });
    article.appendChild(technologies);

    if (proyect.gitHubUrl || proyect.deployUrl) {
      const links = document.createElement("p");
      links.className = "project-links";
      if (proyect.gitHubUrl) {
        const repo = document.createElement("a");
        repo.href = proyect.gitHubUrl;
        repo.className = "link";
        repo.target = "_blank";
        repo.rel = "noopener noreferrer";
        repo.textContent = t("projects.repo");
        links.appendChild(repo);
      }
      if (proyect.deployUrl) {
        const demo = document.createElement("a");
        demo.href = proyect.deployUrl;
        demo.className = "link";
        demo.target = "_blank";
        demo.rel = "noopener noreferrer";
        demo.textContent = t("projects.demo");
        links.appendChild(demo);
      }
      article.appendChild(links);
    }

    footerProyects.appendChild(article);
  });
}
