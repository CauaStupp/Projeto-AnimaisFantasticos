export default function fadeScroll() {
    const sections = document.querySelectorAll('.scroll');

    function animaScroll() {
        sections.forEach((section) => {
            const topo = section.getBoundingClientRect().top;
            const metade = window.innerHeight * 0.6
            const sectionVisivel = (topo - metade) < 0;
            
            if (sectionVisivel) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        });
    }

    window.addEventListener('scroll', animaScroll);
}
