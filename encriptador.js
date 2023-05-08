
var textoIngresado = document.getElementById("textoIngresado");
    
var encriptar = document.getElementById("encriptar");
    encriptar.addEventListener("click", (event) => cargar(event)); //asegura que el evento del clic se pase como parámetro a la función cargar.

var impresionParametros = document.getElementById("impresionParametros");
var htmlParametros = "";

var mensajeVacio = document.getElementById("mensaje-vacio");
var mensajeProcesado = document.getElementById("mensaje-procesado");

var textoIngresado = document.getElementById("textoIngresado");
    textoIngresado.addEventListener("focus", function() {
        // Controlador de eventos para el enfoque (focus) del textarea, permite que se limpie el área cada vez que se haga clic
        if (textoIngresado.value != "") {
                textoIngresado.value = "";
        }
    });

function cargar() {
    htmlParametros = "";
    event.preventDefault(); //Esto previene el envío del formulario y evita que la página se recargue.
    var impresionParametros = document.getElementById("impresionParametros");
    htmlParametros += "Excelente, hemos ingresado "+ textoIngresado.value;
    impresionParametros.innerHTML = htmlParametros;
    mensajeVacio.style.display = "none";
    mensajeProcesado.style.visibility = "visible";
    return (textoIngresado.value);
}   