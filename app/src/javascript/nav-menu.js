function openMenu() {
    let menuMobile = document.querySelector('.nav__mobile'); // Corrigido para '.nav__mobile'
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); // Remove a classe do menu
        document.querySelector('.icon').src = "./assets/Icons/menu-open.svg";
    } else {
        menuMobile.classList.add('open'); // Adiciona a classe ao menu
        document.querySelector('.icon').src = "./assets/Icons/menu-CLOSE.svg";
    }
}
