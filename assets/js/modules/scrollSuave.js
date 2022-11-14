export default function scrollSuave() {
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
