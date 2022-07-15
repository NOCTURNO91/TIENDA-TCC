import {productosBD} from '../helpers/baseDatos.js'
import {pintarProductos} from './controladorPintar.js'

export function buscarProductos(){

    //controlar el input donde escribe el uauario
    let buscador=document.getElementById("busqueda")


    //detecmaos que el usuario escribe y capturamos lo
    //que esra escribiendo
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value
       
        let filtro=productosBD.filter(function(producto){
            return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()))
        })

        console.log(filtro)
        pintarProductos(filtro) 
    })
}