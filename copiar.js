document.addEventListener("DOMContentLoaded", () => {

    let copiarEndereço = document.getElementById("copiarEndereço");
    let copiarEmail = document.getElementById("copiarEmail");
    let copiarTel = document.getElementById("CopiarTel");

    let endereço = copiarEndereço.getAttribute("value");
    let email = copiarEmail.getAttribute("value");
    let telefone = copiarTel.getAttribute("value");

    function copiar(texto, elem) {
        navigator.clipboard.writeText(texto);
        let originalText = elem.innerText;
        elem.innerText = "Copiado!";
        elem.classList.remove("btn-dark");
        elem.classList.add("btn-primary")

        setTimeout(() => {
            elem.innerText = originalText;
            elem.classList.remove("btnprimary")
            elem.classList.add("btn-dark");
        }, 3000);
    }

    copiarEndereço.addEventListener("click", () => copiar(endereço, copiarEndereço));
    copiarEmail.addEventListener("click", () => copiar(email, copiarEmail));
    copiarTel.addEventListener("click", () => copiar(telefone, copiarTel));

});
