export default function trocaTexto() {
    const tabAnimais = document.querySelectorAll('.tab-imgs li');
    const tabTexto = document.querySelectorAll('.tab-texto section');

    tabTexto[0].classList.add('ativo');

    function ativarTab(index) {
        tabTexto.forEach((texto) => {
            texto.classList.remove('ativo');
        });
        tabTexto[index].classList.add('ativo');
    }

    tabAnimais.forEach((item, index) => {
        item.addEventListener('click', () => {
            ativarTab(index);
        });
    });
}