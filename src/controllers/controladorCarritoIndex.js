let suma=0
carrito.forEach(function(producto){
    console.log(producto.cantidad)
    suma=suma+Number(producto.cantidad)
})
localStorage.setItem("cantidad",suma)
bolitaCantidad.textContent=suma