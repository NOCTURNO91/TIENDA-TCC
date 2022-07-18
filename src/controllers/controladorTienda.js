//se traen los datos de los productos (consultar la bd)
import {productosBD} from '../helpers/baseDatos.js'
console.log(productosBD)

//llamamos al metodo encargado de aplicar traversing y pintar la tienda
import {pintarProductos} from './controladorpintar.js'
pintarProductos(productosBD)

//llamamos al metodo encargado de buscar productos por texto coincidente
import { buscarProductos } from './controladorBuscar.js'
buscarProductos()

//escuchamos clic en el contenido padre de la tienda
let contenedor=document.getElementById("fila")

import {ampliarInfoProducto} from './controladorAmpliarinfo.js'
contenedor.addEventListener("click", function(evento){
    let producto = ampliarInfoProducto(evento)
    console.log(producto)

    //window.location.href="/src/views/ampliarInfo.html"
    //almacernar en el localstorage la informacion del producto seleccionado
    localStorage.setItem('infoProducto' ,JSON.stringify(producto))
    console.log(localStorage.getItem('infoProducto'))

    //abro nueva ventana
    window.location.href="/src/views/ampliarInfo.html"

})