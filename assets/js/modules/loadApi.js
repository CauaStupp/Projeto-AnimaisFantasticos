import initNumeros from './numeros.js';


export default function loadApi() {
    async function animaisLoad(url) {
        try {
            const animais = await fetch(url);
            const animaisJson = await animais.json();
            const numerosGrid = document.querySelector('.numeros-grid');
        
            animaisJson.forEach(animal => {
                const divAnimal = criarAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            });

            initNumeros();
        } catch (erro) {
            console.log(Error(erro))
        }
        
    }
    
    function criarAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.species}</h3><span data-numero>${animal.numeros}</span>`;
        return div;
    } 
    
    animaisLoad('../assets/json/apiAnimais.json');
}
