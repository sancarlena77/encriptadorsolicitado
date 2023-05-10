

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


    document.getElementById("textoIngresado").addEventListener("keypress",verificar); // Evento para cada tecla pulsada

    function verificar(e) {
        // comprobamos con una expresión regular que el caracter pulsado sea una letra minúscula o un espacio, si ponemos i después de / entonces no distingue entre mayúsculas y minúsculas.
        if (e.key.match(/[a-zñ\s]/) === null) {
            // Si la tecla pulsada no es la correcta, no la permite
            e.preventDefault();
        }
    }

    function cargar() {
        if (textoIngresado.value == "Ingrese el texto aquí" || textoIngresado.value == "") {
            alert("No ha ingresado su texto, por favor inténtelo de nuevo");
        } else{
            htmlParametros = "";
            event.preventDefault(); //Esto previene el envío del formulario y evita que la página se recargue.
            var impresionParametros = document.getElementById("impresionParametros");
            htmlParametros += "Su texto encriptado es: "+ textoIngresado.value;
            impresionParametros.innerHTML = htmlParametros;
            mensajeVacio.style.display = "none";
            mensajeProcesado.style.visibility = "visible";
        }
        return (textoIngresado.value);
    }   