window.onload = function() {
    const listaNav = document.querySelectorAll(".menu li a");
    
    listaNav.forEach(function(element) {
        element.addEventListener("click",(e)=>{
            element.classList.add("active");
            
    });
    });

    const email = "heiderarellano@outlook.com";
    const $form = document.querySelector("#form-email");
    $form.addEventListener("submit", function(e) {
        e.preventDefault();
        const form = new FormData(this);
        let name = encodeURIComponent(form.get("name"));
        let subject = encodeURIComponent(form.get("subject"));
        let message = encodeURIComponent(form.get("message"));
        const $setEmail = document.createElement('a');
        $setEmail.setAttribute("href", `mailto:${email}?subject=${name} : ${subject}&body=${message}`);
        $setEmail.click();
    });


}