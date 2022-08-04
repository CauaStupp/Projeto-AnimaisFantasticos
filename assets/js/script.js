function trocaTexto() {
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

trocaTexto();

function mostrarSlide() {
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

mostrarSlide();

function scrollSuave() {
    const linksScroll = document.querySelectorAll('.menu-scroll a[href^="#"]');

    function scrollMover(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        });
    }

    linksScroll.forEach((link) => {
        link.addEventListener('click', scrollMover);
    });
}

scrollSuave();



function fadeScroll() {
    const sections = document.querySelectorAll('.scroll');

    function animaScroll() {
        sections.forEach((section) => {
            const topo = section.getBoundingClientRect().top - 400;
            if (topo < 0) {
                section.classList.add('ativo');
            }
        });
    }

    window.addEventListener('scroll', animaScroll);
}

fadeScroll();