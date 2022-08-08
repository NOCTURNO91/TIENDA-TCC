export function pintarProductos(productos){


    //1.CREAR UNA REDERENCIA DE MEMORIA QUE TRAIGA EL HTML SOBRE
    //EL CUAL VOY A PINTAR
    let fila=document.getElementById("fila")
    fila.innerHTML=""


    //2.RECORRER EL ARREGLO DE DATOS
    productos.forEach(function(producto){

        //CREAMOS LO QUE NECESITEMOS

        //2.1 CREAMOS UNA COLUMNA
        let columna=document.createElement("div")
        columna.classList.add("col")

        //2.2 CREAMOS LA TARGETA
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","text-center")

        //2.3 creamos la foto
        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100",'h-100')
        foto.src=producto.fotos[0]

        let descripcion = document.createElement('p')
        descripcion.classList.add("d-none")
        descripcion.textContent = producto.descripcion
        console.log(producto)

        //2.4 creamos el nombre
        let nombre=document.createElement("h3")
        nombre.textContent=producto.nombre

        //2.5 creamos el precio
        let precio=document.createElement("h2")
        precio.classList.add("fw.bold")
        precio.textContent="$"+producto.precio

        let popularidad=document.createElement("i")
        popularidad.classList.add("d-none")
        popularidad.textContent = producto.descripcion
        

        //deteccion de mouse
        columna.addEventListener("mouseover",function(evento){
            foto.src=producto.fotos[1]
        })

        columna.addEventListener("mouseleave",function(evento){
            foto.src=producto.fotos[0]
        })

        //jerarquias (padre e hijos)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
  

        columna.appendChild(tarjeta)

        fila.appendChild(columna)
    })
}