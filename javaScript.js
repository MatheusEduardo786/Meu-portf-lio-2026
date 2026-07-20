ScrollReveal().reveal('.hero', { delay: 500 });
ScrollReveal().reveal('.sobre-min', { delay: 500 });
ScrollReveal().reveal('.experiencia', { delay: 500 });
ScrollReveal().reveal('.meus-projetos', { delay: 500 });
ScrollReveal().reveal('.contato', { delay: 500 });
ScrollReveal().reveal('.rodape', { delay: 500 });


const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_4m6r7z1",
        "template_jrgr66s",
        this
    ).then(() => {

        alert("Mensagem enviada com sucesso!");

        form.reset();

    }).catch((error) => {

        alert("Erro ao enviar.");

        console.error(error);

    });

});