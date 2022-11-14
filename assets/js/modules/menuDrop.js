import outsideClick from './outsideClick.js'

export default function dropDown() {
    const dropDownMenu = document.querySelectorAll('[data-dropdown]');

    dropDownMenu.forEach(menu => {
        ['touchstart', 'click'].forEach(evento => {
            menu.addEventListener(evento, handleClick);
        })
    });


    function handleClick(e) {
        e.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        })
    }
}



