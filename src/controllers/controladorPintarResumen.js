export function pintarResumencompra(fotoURL,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto){

    let contenedor=document.getElementById("contenedor")

    let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4","border-end")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-6")

    let foto=document.createElement("img")
    foto.classList.add("img-fluid","w-100")
    foto.src=fotoURL

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center")
    nombre.textContent=nombreMensaje

    let boton=document.createElement("a")
    boton.classList.add("btn","btn-primary","w-50","d-block","mx-auto")
    boton.textContent="Ir a la tienda"
    boton.setAttribute("href","../../tienda.html")

    let precio=document.createElement("h3")
    precio.textContent="precio unid: "+precioProducto

    let cantidad=document.createElement("h3")
    cantidad.textContent="precio unid: "+cantidadProducto

    //padre e hijo
    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    if(banderaBoton==true){
        columna2.appendChild(boton)
    }
    if(banderaPrecio==true){
        columna2.appendChild(precio)
    }
    if(banderaCantidad==true){
        columna2.appendChild(cantidad)
    }
    
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)

}

let suma=0
let carrito=(JSON.parse(localStorage.getItem("carrito")))
carrito.forEach(function(producto){
    console.log(producto.cantidad)
    suma=suma+Number(producto.cantidad)
})
    // localStorage.setItem("cantidad",suma)
    // bolitaCantidad.textContent=suma 
    
    // let bolitaCantidad=document.getElementById("contadorCarrito")
    // bolitaCantidad.textContent=suma



