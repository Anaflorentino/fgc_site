document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuMobile = document.querySelector('.nav__mobile');
    const icon = document.querySelector('.icon');

    // Função para adicionar a classe "scrolled" à header durante o scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled'); // Adiciona a classe
        } else {
            header.classList.remove('scrolled'); // Remove a classe
        }
    });

    // Função para abrir ou fechar o menu mobile
    window.openMenu = function () {
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open'); // Fecha o menu
            if (icon) {
                icon.src = "./assets/Icons/menu-open.svg"; // Atualiza o ícone
            }
        } else {
            menuMobile.classList.add('open'); // Abre o menu
            if (icon) {
                icon.src = "./assets/Icons/menu-CLOSE.svg"; // Atualiza o ícone
            }
        }
    };
});
