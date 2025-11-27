  const toggle = document.querySelector("#toggle-menu");
  const nav = document.querySelector('nav')
  const overlay = document.querySelector("#overlay");
  const body = document.body;

  console.log(toggle);
  console.log(overlay);
  
  nav.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains('link')) {
      console.log('cick a un enlace');
      nav.classList.remove("menu-open")
      body.classList.toggle("menu-open");
    }
  })

  toggle?.addEventListener("click", () => {
    body.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");
  });

  overlay.addEventListener("click", () => {
    body.classList.remove("menu-open");
    nav.classList.remove("menu-open")
  });
