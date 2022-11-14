export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemanas = funcionamento.dataset.semana.split(',').map(Number);
    const horasSemanas = funcionamento.dataset.horas.split(',').map(Number);


    const dataAtual = new Date();
    const diaAtual = dataAtual.getDay();
    const horasAtual = dataAtual.getHours();

    const semanaAberto = diasSemanas.indexOf(diaAtual) !== -1;
    const horarioAberto = (horasAtual >= horasSemanas[0] && horasAtual < horasSemanas[1]);

    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
}



