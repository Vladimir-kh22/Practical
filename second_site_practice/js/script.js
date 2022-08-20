
function burger() {
    const buttomMenu = document.querySelector('.menu__icon');
    const bodyOverflowHidden = document.querySelector('body')
    const menuHeader = document.querySelector('.header__menu');

    buttomMenu.addEventListener('click', function () {
        menuHeader.classList.toggle('none');
        bodyOverflowHidden.classList.toggle('none');
    })
}
burger();
