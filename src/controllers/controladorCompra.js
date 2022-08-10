let producto=(JSON.parse(localStorage.getItem('infoProducto')))

let carrito

//revisar verificar si hay productos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){
    //cremos el carrito de compras
    carrito=[]
}else{
    carrito=JSON.parse(localStorage.getItem("carrito"))
}

//pintamos la foto desde el objeto del localstorage
let foto=document.getElementById("foto")
foto.src=producto.foto

let nombre=document.getElementById("nombre")
nombre.textContent=producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.classList.add('descrip')
descripcion.textContent=producto.descripcion


let baseEstrellas=document.getElementById("contenedorEstrellas")
    for(let i=1; i<=Number(producto.popularidad); i++){

        let estrella=document.createElement("i")
        estrella.classList.add("bi","bi-star-fill")
        estrella.setAttribute('id','estrella')
        baseEstrellas.appendChild(estrella)
    }




console.log(producto.popularidad)



let bolitaCantidad=document.getElementById("bolita")
let botonagregar=document.getElementById("agregar")
botonagregar.addEventListener("click", function(){

    //capturar la cantidad del producto seleccionado
    //capturamos el value del input

    let cantidad =document.getElementById("cantidad").value
    console.log(document.getElementById("cantidad"))
    producto.cantidad=cantidad
    console.log(producto)
    
    //se agrega la alerta
    let alerta=document.getElementById("alerta")
    alerta.classList.remove("invisible")


setTimeout(function(){
    alerta.classList.add("invisible")
},3000)


//agregando un nuevo elemnto a un arreglo

carrito.push(producto)

//almaceno en carrito en el localstorage
localStorage.setItem("carrito",JSON.stringify(carrito))

console.log(carrito)
//agregando  un producto al carrito de compras


//reccoriendo un arreglo
let suma=0
carrito.forEach(function(producto){
    console.log(producto.cantidad)
    suma=suma+Number(producto.cantidad)
})
localStorage.setItem("cantidad",suma)
bolitaCantidad.textContent=suma

})





