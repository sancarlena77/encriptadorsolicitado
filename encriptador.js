

    var textoIngresado = document.getElementById("textoIngresado");
        
    var encriptar = document.getElementById("encriptar");
        encriptar.addEventListener("click", (event) => encriptarTexto(event)); //asegura que el evento del clic se pase como parámetro a la función encriptarTexto.

    var desencriptar = document.getElementById("desencriptar");
        desencriptar.addEventListener("click", (event) => desencriptarTexto(event)); 

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

    var textoEncriptado = "";
    var textoDesencriptado = "";
    var cuenta = 0;
    var cuentaArreglo = 0;
    var encontrado = false;

    const sustituto = ["ai", "enter", "imes", "ober", "ufat"];
    const original = ["a", "e", "i", "o", "u"];
    
    function verificar(e) {
        // comprobamos con una expresión regular que el caracter pulsado sea una letra minúscula o un espacio, si ponemos i después de / entonces no distingue entre mayúsculas y minúsculas.
        if (e.key.match(/[a-zñ\s]/) === null) {
            // Si la tecla pulsada no es la correcta, no la permite
            e.preventDefault();
        }
    }

    function cargar(event) {
        if (textoIngresado.value == "Ingrese el texto aquí" || textoIngresado.value == "") {
            alert("No ha ingresado su texto, por favor inténtelo de nuevo");
        }
    } 

    function encriptarTexto (texto){
        cargar();
        for (cuenta = 0; cuenta < textoIngresado.value.length; cuenta++) {
            encontrado = false;
            for (cuentaArreglo = 0; cuentaArreglo < original.length; cuentaArreglo++) {
                if (textoIngresado.value[cuenta] == original[cuentaArreglo]) {
                    encontrado = true;
                    textoEncriptado = textoEncriptado + sustituto[cuentaArreglo];
                }
            }
            if (encontrado == false){
                textoEncriptado = textoEncriptado + textoIngresado.value[cuenta];
            }  
        }
        htmlParametros = "";
        var impresionParametros = document.getElementById("impresionParametros");
        htmlParametros += "Su texto encriptado es: "+ textoEncriptado;
        impresionParametros.innerHTML = htmlParametros;
        mensajeVacio.style.display = "none";
        mensajeProcesado.style.visibility = "visible";
    }

    function desencriptarTexto (texto){
        cargar();
        textoEncriptado = textoIngresado.value;
        while (cuentaArreglo < original.length) {
            if (textoEncriptado.indexOf(sustituto[cuentaArreglo]) != -1) {
                textoEncriptado = textoEncriptado.replace(sustituto[cuentaArreglo],original[cuentaArreglo]); 
            } else {
                cuentaArreglo++;
            }
        }
        htmlParametros = "";
        var impresionParametros = document.getElementById("impresionParametros");
        htmlParametros += "Su texto desencriptado es: "+ textoEncriptado;
        impresionParametros.innerHTML = htmlParametros;
        mensajeVacio.style.display = "none";
        mensajeProcesado.style.visibility = "visible";
    }   