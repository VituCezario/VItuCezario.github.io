// ===== Toggle Menu Hamburger =====

const menuHamburguer = document.querySelector('.menu-hamburguer');
const navResponsive = document.querySelector('.nav-responsive');

// Verifica se os elementos existem antes de adicionar o evento
if (menuHamburguer && navResponsive) {
    menuHamburguer.addEventListener('click', () => {
        toggleMenu();
    });

    function toggleMenu() {
        // Alterna a classe "change" para o menu hambúrguer
        menuHamburguer.classList.toggle('change');

        // Alterna a exibição do menu de navegação responsiva
        const isMenuActive = menuHamburguer.classList.contains('change');
        navResponsive.style.display = isMenuActive ? 'block' : 'none';
    }
} else {
    console.error('Erro: menuHamburguer ou navResponsive não foram encontrados no DOM.');
}

// ===== Form Submission Handling =====

const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Verifica se o formulário e a mensagem de feedback existem antes de adicionar o evento
if (form && formMessage) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); // Limpa o formulário
                formMessage.style.display = 'block'; // Mostra a mensagem de sucesso
                formMessage.style.color = 'green';
                formMessage.textContent = 'Message sent successfully!';
            } else {
                formMessage.style.display = 'block';
                formMessage.style.color = 'red';
                formMessage.textContent = 'Failed to send message. Please try again later.';
            }
        } catch (error) {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.textContent = 'An error occurred. Please try again.';
        }
    });
} else {
    console.error('Erro: contact-form ou form-message não foram encontrados no DOM.');
}

