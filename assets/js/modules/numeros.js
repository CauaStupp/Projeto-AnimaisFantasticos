export default function initNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    function animarNumeros() {
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const adicionando = Math.floor(total / 100);

            let inicio = 0;

            const soma = setInterval(() => {
                inicio = inicio + adicionando;
                numero.innerText = inicio;

                if (inicio > total) {
                    numero.innerText = total;
                    clearInterval(soma);
                }
            }, 25 * Math.random());
        });
    }

    

    function trocaMutacao (mutacao) {
        if (mutacao[0].target.classList.contains('ativo')) {
            analise.disconnect();
            animarNumeros();
        }
    }

    const analisarElemento = document.querySelector('.numeros');
    const analise = new MutationObserver(trocaMutacao);
    analise.observe(analisarElemento, {attributes: true});
}


