    var textoIngresado = document.getElementById("textoIngresado");
    var permitidos = /^[a-zñ\s]+$/;
    var continuarProcesamiento = true;
        
    var encriptar = document.getElementById("encriptar");
        encriptar.addEventListener("click", (event) => encriptarTexto(event)); //asegura que el evento del clic se pase como parámetro a la función encriptarTexto.

    var desencriptar = document.getElementById("desencriptar");
        desencriptar.addEventListener("click", (event) => desencriptarTexto(event)); 

    var copiar = document.getElementById("copiar");
        copiar.addEventListener("click", (event) => copiarTexto()); 

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

    document.getElementById("textoIngresado").addEventListener("keypress",validarFrontEnd); // Evento para cada tecla pulsada

    var textoProcesado = "";
    var cuenta = 0;
    var cuentaArreglo = 0;
    var encontrado = false;

    const sustituto = ["ai", "enter", "imes", "ober", "ufat"];
    const original = ["a", "e", "i", "o", "u"];
    
    function validarFrontEnd(e) {
        // comprobamos con una expresión regular que el caracter pulsado sea una letra minúscula o un espacio, si ponemos i después de / entonces no distingue entre mayúsculas y minúsculas.
        if (e.key.match(permitidos) === null) {
            // Si la tecla pulsada no es la correcta, no la permite
            e.preventDefault();
        } 
    }

    function validarBackEnd(texto){
        if(permitidos.test(texto)) {
           return true;
        } else {
          return false;
        }
    }

    function cargar() {
        continuarProcesamiento = true;
        if (textoIngresado.value == "Ingrese el texto aquí" || textoIngresado.value == "" || !/[a-zñ]/i.test(textoIngresado.value) ){
            alert("No ha ingresado su texto, por favor inténtelo de nuevo");
            textoIngresado.focus();
            continuarProcesamiento = false;
        } else if (validarBackEnd (textoIngresado.value) == false) {
            alert("Solamente se permiten letras minúsculas sin acentos");
            textoIngresado.focus()
            continuarProcesamiento = false;
        }
        cuenta = 0;
        cuentaArreglo = 0;
        textoProcesado = "";
        encontrado = false;
    } 

    function encriptarTexto (texto){
        cargar();
        if (continuarProcesamiento) {
            for (cuenta = 0; cuenta < textoIngresado.value.length; cuenta++) {
                encontrado = false;
                for (cuentaArreglo = 0; cuentaArreglo < original.length; cuentaArreglo++) {
                    if (textoIngresado.value[cuenta] == original[cuentaArreglo]) {
                        encontrado = true;
                        textoProcesado = textoProcesado + sustituto[cuentaArreglo];
                    }
                }
                if (encontrado == false){
                    textoProcesado = textoProcesado + textoIngresado.value[cuenta];
                }  
            }
            htmlParametros = "";
            var impresionParametros = document.getElementById("impresionParametros");
            htmlParametros += "Su texto encriptado es: "+ textoProcesado;
            impresionParametros.innerHTML = htmlParametros;
            mensajeVacio.style.display = "none";
            mensajeProcesado.style.visibility = "visible";
        } else {
            textoIngresado.focus();
        }       
    }

    function desencriptarTexto (texto){
        cargar();
        if (continuarProcesamiento) {
            textoProcesado = textoIngresado.value;
            while (cuentaArreglo < original.length) {
                if (textoProcesado.indexOf(sustituto[cuentaArreglo]) != -1) {
                    textoProcesado = textoProcesado.replace(sustituto[cuentaArreglo],original[cuentaArreglo]); 
                } else {
                    cuentaArreglo++;
                }
            }
            htmlParametros = "";
            var impresionParametros = document.getElementById("impresionParametros");
            htmlParametros += "Su texto desencriptado es: "+ textoProcesado;
            impresionParametros.innerHTML = htmlParametros;
            mensajeVacio.style.display = "none";
            mensajeProcesado.style.visibility = "visible";
        } else {
            textoIngresado.focus();
        }
    }   

    function copiarTexto() {
        const inputOculto = document.createElement ('input');
        inputOculto.setAttribute('value', textoProcesado);
        document.body.appendChild(inputOculto);
        inputOculto.select();
        document.execCommand('copy');
        document.body.removeChild(inputOculto);
      } 