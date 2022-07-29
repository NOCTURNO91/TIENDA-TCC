import{pintarResumencompra} from './controladorPintarResumen.js'

//accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//comparo o pregunto si el carrito esta vacio
if(carrito==null){

    pintarResumencompra('../../assets/img/carritocompras.jpg','carrito vacio',true,false,null,false,null)

}else{ //el carrito esta lleno

    //recorro el carrito de compras
    carrito.forEach(function(producto){

        pintarResumencompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad)
    })

}

//rutina para limpiar el resumen de la compra
let botonlimpiar=document.getElementById("bottonlimpiar")
botonlimpiar.addEventListener("click",function(evento){
    localStorage.removeItem("carrito")

    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML=""
    pintarResumencompra('../../assets/img/carritocompras.jpg','carrito vacio',true,false,null,false,null)

})