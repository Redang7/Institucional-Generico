document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal--info");
    const openButtons = document.querySelectorAll(".header__cta, .faq__btn");


    modal.innerHTML = `
    <button class="modal__close" aria-label="Fechar modal">x</button>
    <h2>Cadastro</h2>
    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
    <input type="email" placeholder="Digite seu email" />
    <button class="modal__submit">Entrar na próxima turma</button>
  `;


    const openModal = () => {
        if (!modal.open) {
            modal.showModal();
        }
    };

    openButtons.forEach(btn => {
        btn.addEventListener("click", openModal);
    });

    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal__close")) {
            modal.close();
        }
    });

    modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        if (
            e.clientX < rect.left || e.clientX > rect.right ||
            e.clientY < rect.top || e.clientY > rect.bottom
        ) {
            modal.close();
        }
    });
});
