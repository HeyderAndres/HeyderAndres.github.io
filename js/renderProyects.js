export function renderProyects(proyects) {
  const proyectsSection = document.querySelector("#proyects-section");
  const footerProyects = proyectsSection.querySelector("footer");
  proyects.forEach((proyect) => {
    const article = document.createElement("article");
    article.className = 'project-card';

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = proyect.imageUrl;
    img.alt = proyect.name;

    const proyectName = document.createElement("h4");
    proyectName.textContent = proyect.name;

    const proyectDescription = document.createElement("p");
    proyectDescription.textContent = proyect.description;

    const technologies = document.createElement("div");
    proyect.technologies.forEach((tech) => {
      const span = document.createElement("span");
      span.textContent = tech;
      technologies.appendChild(span);
    });

    article.appendChild(img);

    const a = document.createElement("a");
    a.href = proyect.gitHubUrl;
    a.classList.add("link")
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.appendChild(proyectName);
    article.appendChild(a);
    article.appendChild(proyectDescription);
    article.appendChild(technologies);

    footerProyects.appendChild(article);
  });
}
