import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
    const btnMobile = document.querySelector('.btnMobile');
    const menu = document.querySelector('#menu');
    const eventos = ['click', 'touchstart'];

    if (btnMobile) {
        function abrirMenu(e) {
            menu.classList.add('active');
            btnMobile.classList.add('active');

            outsideClick(menu, eventos, () => {
                menu.classList.remove('active');
                btnMobile.classList.remove('active')
            });
        }

        eventos.forEach((evento) => {
            btnMobile.addEventListener(evento, abrirMenu);
        });
    }
    
}


