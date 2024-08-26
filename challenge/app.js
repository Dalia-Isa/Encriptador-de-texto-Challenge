//-- Seleccion de elmentos --//
var botonEncriptar = document.querySelector(".boton1");
var botonDesencriptar = document.querySelector(".boton2");
var imagen = document.querySelector(".contenedor__encriptador__imagen");
var contenedorParrafo = document.querySelector(".contenedor__encriptador__parrafo");
var resultadoTexto = document.querySelector(".contenedor__resultado");
const btnCopiar = document.querySelector(".copiar"); 

//--Boton de encriptar --//
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

//-- Funciones de encriptacion --//
function encriptar() {
    ocultarImagenYTexto(); // Funcion para desaparecer la imagen y el texto de "ningun mensaje fue encontrado"
    var cajatexto = recuperarTexto(); //Se crea una variable en la cual sirve para recuperar el texto que se escriba (cajatexto = encriptador)
    resultadoTexto.textContent = encriptarTexto(cajatexto); 
}

//-- Funciones de Desencriptacion --//
function desencriptar() {
    ocultarImagenYTexto(); // Funcion para desaparecer la imagen y el texto de "ningun mensaje fue encontrado"
    var cajatexto = recuperarTexto(); //Se crea una variable en la cual sirve para recuperar el texto que se escriba 
    resultadoTexto.textContent = desencriptarTexto(cajatexto); //Acceder al contenedor de la caja de texto
}

//-- Funcion para Recuperar el texto --//
function recuperarTexto() {
    var cajatexto = document.querySelector(".encriptador")
    return cajatexto.value //evDuelve el texto actual dentro del área de la caja de texto.
}

function ocultarImagenYTexto() {
    imagen.classList.add("ocultar"); //Propiedad que proporciona una forma conveniente de acceder y manipular las clases CSS de un elemento HTML.
    contenedorParrafo.classList.add("ocultar");
}

// Encriptador de la función //
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter" 
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }               
    }
    btnCopiar.style.visibility = "inherit";

    return textoFinal;
}


// Desencriptador de la función //
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i]
        }               
    }
    return textoFinal;

}


    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".contenedor__resultado").textContent;
    navigator.clipboard.writeText(contenido);

    let textoCopiar = resultadoTexto;
    textoCopiar.select();

    // const tempInput = document.createElement('input');
    // tempInput.value = contenedor__resultado.innerText;
    // document.body.appendChild(tempInput);
    // tempInput.select();

    // resultadoTexto.classList.add('resaltado');

});
