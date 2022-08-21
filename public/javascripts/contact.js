window.onload = function() {
    const listaNav = document.querySelectorAll(".menu li a");
    
    listaNav.forEach(function(element) {
        element.addEventListener("click",(e)=>{
            element.classList.add("active");
            
    });
    });

    const email = "heiderarellano@outlook.com";
    const $form = document.querySelector(".form-group");
    const $setEmail = document.querySelector("#setEmail")
    $form.addEventListener("submit", function(e) {
        e.preventDefault();
        const form = new FormData(this);
        let name = form.get("nombre");
        let asunto = form.get("asunto");
        let message = form.get("message");
        $setEmail.setAttribute("href", `mailto:${email}?subject=${name} : ${asunto}&body=${message}`);
        $setEmail.click();
    });


}