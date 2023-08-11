function alerta() {
    console.log("Hola!");

}
const btn = document.querySelector('button');

    btn.addEventListener('click', (event) => { 
        event.stopPropagation();
        console.log("Hola!"); 
    });

const div = document.querySelector('div');

    div.addEventListener('click', () => 
        
        console.log("Hola! Soy el div")
    );
