//DATOS DE LA BD
let productosBD=[
]

//funcion para pintar productos en la tienda
export function pintarProductos(productos){
    //PASOS PARA PINTAR (HACER RENDER) DE ETIQUETAS HTML DESDE JS
//TRAVERSING

//1crear una referencia en memoria(variable) que almacena
//la eqtiqueta sobre la cual voy a pintar (ETIQUETA PADRE O ETIQUETA RAIZ)
let fila=document.getElementById("fila")

//2.RECORRO EL ARREGLO DE DATOS Y APLICO TRAVERSING
productos.forEach(function(producto){

    //2.1 creando una colomna desde JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.2 creando la tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","text-center")

    //2.3 creando la foto
    let fotoproducto=document.createElement("img")
    fotoproducto.classList.add("omg-fluid","w-100",'h-100')
    fotoproducto.src=producto.fotos[0]

    //3 DEFINO PADRES E HIJOS
    tarjeta.appendChild(fotoproducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    //2.4 creando el nombre del producto
    let nombreproducto=document.createElement("h3")
    nombreproducto.textContent=producto.nombre

    //2.4 creando el precio del producto
    let precioproducto=document.createElement("h4")
    precioproducto.classList.add("fw-bold")
    precioproducto.textContent='$'+producto.precio+'COP'

    //2.6 DETECTANDO EVENTOS
    columna.addEventListener("mauseover",function(){
        fotoproducto.src=producto.fotos[1]
    })

    columna.addEventListener("mauseleave",function(){
        fotoproducto.src=producto.fotos[0]
    })

}




    






//fefino padres e hijos
tarjeta.appendChild(fotoproducto)
tarjeta.appendChild(nombreproducto)
tarjeta.appendChild(precioproducto)
columna.appendChild(tarjeta)
fila.appendChild(columna)
}
)

let buscador=document.getElementById("busqueda")

buscador.addEventListener("keypress",function(evento){
    console.log(evento.target.value)
})

//console.log(productosBD)

//RECORRIENDO UN ARREGLO (ESCULAR)

//productosBD.forEach(function(producto){
    //console.log(producto.nombre)
    //console.log(producto.fotos[0])
//})

