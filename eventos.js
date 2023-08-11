function alerta() {
    console.log("Hola!");

}

document.addEventListener("DOMContentLoaded", function() {
    const div = document.getElementById('div');
    div.addEventListener('click', function() {
        console.log("Hola! Soy el div"); 
    });
  });