//DATOS DE LA BD
let productosBD=[

    {
        nombre:"Downhill",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/quiroz555tiendatcc.appspot.com/o/imagen1.jpg?alt=media&token=e57b9a34-1430-4b52-ae40-a1a2e16a1058','https://firebasestorage.googleapis.com/v0/b/quiroz555tiendatcc.appspot.com/o/imagen1.jpg?alt=media&token=e57b9a34-1430-4b52-ae40-a1a2e16a1058'],
        descripcion:'moto de alto cilindrage'
    },
    {
        nombre:"Downhill",
        precio:55000,
        cantidad:0,
        fotos:['https://firebasestorage.googleapis.com/v0/b/quiroz555tiendatcc.appspot.com/o/imagen1.jpg?alt=media&token=e57b9a34-1430-4b52-ae40-a1a2e16a1058','https://firebasestorage.googleapis.com/v0/b/quiroz555tiendatcc.appspot.com/o/imagen1.jpg?alt=media&token=e57b9a34-1430-4b52-ae40-a1a2e16a1058'],
        descripcion:'moto de alto cilindrage'
    },
]

//PASOS PARA PINTAR (HACER RENDER) DE ETIQUETAS HTML DESDE JS
//TRAVERSING

//1crear una referencia en memoria(variable) que almacena
//la eqtiqueta sobre la cual voy a pintar (ETIQUETA PADRE O ETIQUETA RAIZ)
let fila=document.getElementById("fila")

//2.RECORRO EL ARREGLO DE DATOS Y APLICO TRAVERSING
productosBD.forEach(function(producto){

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
    nombreproducto.textContent=producto.precio

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
    






//fefino padres e hijos
tarjeta.appendChild(fotoproducto)
tarjeta.appendChild(nombreproducto)
tarjeta.appendChild(precioproducto)
tarjeta.appendChild(tarjeta)
fila.appendChild(columna)
}
)

//console.log(productosBD)

//RECORRIENDO UN ARREGLO (ESCULAR)

//productosBD.forEach(function(producto){
    //console.log(producto.nombre)
    //console.log(producto.fotos[0])
//})

