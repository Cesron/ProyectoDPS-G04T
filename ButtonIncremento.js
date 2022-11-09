import React from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Item } from '../components/Catalogue/Item';
import { AutocompleteData } from '../data/AutocompleteData';

id="boton,producto" 

const Incremento =() => {
//busco la forma de acceder al id del boton que seleccione y como si te fijas el boton se llama

id="boton,producto"//ese nombre lo divido busco la manera de dividir el nombre por la coma 



let mensaje = "producto incrementado";

let resultado = mensaje.split(','); //aqui le digo que me divida en dos la cadena al encontrar una coma.
resultado[0] //aqui aparecera la parte de mancita
resultado[1] //aqui aparecera la parte de producto incremetado.
{
<button id="boton,producto" onClick={Incremento}>+</button>

const Incremento =() => {
}}
<button id="boton,producto" onClick={Incremento}>+</button>

const Incremento =() => {//bueno aqui no recuerdo como capturar el id del boton es de hacer pruebas pero creo que es con target



let idBoton = "boton,producto";
let cadena = idBoton.split(',');
let valorInput = document.getElementById(cadena[1]).value;//llamamos al input para saber cuanto tiene
let sumador = Number(valorInput)+1;
document.getElementById(cadena[1]).value = sumador;
}
}