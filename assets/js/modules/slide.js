export default function mostrarSlide() {
    const listaAccordion = document.querySelectorAll('.lista-accordion dt');
    listaAccordion[0].classList.add('ativo');
    listaAccordion[0].nextElementSibling.classList.add('ativo');

    function ativarAccordion() {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    listaAccordion.forEach((item) => {
        item.addEventListener('click', ativarAccordion)
    });
}
