//entradas==variables
let nombre="Juan"
let numero=5
let numeros=[1,2,3,4]
let politico={
    nombre:"Alvaro",
    poder:"dinero",
    edad:64
}

//CONTROLADO ETIQUETAS
//1.Necesito almacenar una etiqueta en una variable
let titulo=document.getElementById("titulo")
let imagen=document.getElementById("foto")

//2.Identifico que quiero CONTROLAR
//2.1 CAMBIO EL TEXTO
titulo.textContent="CHAO"

//2.2 CAMBIANDO LA FUENTE SRC
imagen.src="https://placeimg.com/640/480/any"
    