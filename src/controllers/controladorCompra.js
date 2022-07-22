console.log("hola estamos comprando")
console.log(JSON.parse(localStorage.getItem('infoProducto')))

let producto=(JSON.parse(localStorage.getItem('infoProducto')))

let carrito
//revisar verificar si hay productos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){

    //cremos el carrito de compras
    carrito=[]
}else{
    carrito=JSON.parse(localStorage.getItem("carrito"))
    
}
console.log(JSON.parse(localStorage.getItem("carrito")))

//pintamos la foto desde el objeto del localstorage
let foto=document.getElementById("foto")
foto.src=producto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion

//capturar la cantidad del producto seleccionado
//capturamos el value del input


let botonagregar=document.getElementById("agregar")
botonagregar.addEventListener("click", function(){
   let cantidad =document.getElementById("cantidad").value
   producto.cantidad=cantidad
   console.log(producto)

})


//agrego un nuevo atributo(cantidad) al objeto producto


//agregando un nuevo elemnto a un arreglo

carrito.push(producto)

//almaceno en carrito en el localstorage
localStorage.setItem("carrito",JSON.stringify(carrito))

console.log(carrito)
//agregando  un producto al carrito de compras



