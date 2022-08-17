
function burger() {
    const buttomMenu = document.querySelector('.menu__icon');
    const menuHeader = document.querySelector('.header__menu');

    buttomMenu.addEventListener('click', function () {
        menuHeader.classList.toggle('none');
    })
}
burger();
