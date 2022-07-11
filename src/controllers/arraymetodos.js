let plato1={
    nombre:"bandeja paisa",
    precio:25000,
    descripcion:'na',
    foto:'na',
    categoria:1,

}

let plato2={
    nombre:"Lengua en Salsa Criolla",
    precio:31000,
    descripcion:'na',
    foto:'na',
    categoria:3,

}

let plato3={
    nombre:"Mondongo",
    precio:28000,
    descripcion:'na',
    foto:'na',
    categoria:2,
}

let plato4={
    nombre:"Sopa de Cura",
    precio:34000,
    descripcion:'na',
    foto:'na',
    categoria:4,
}

let plato5={
    nombre:"riñones",
    precio:37000,
    descripcion:'na',
    foto:'na',
    categoria:2,

}

let platos=Array(plato1,plato2,plato3,plato4,plato5)
    
platos.forEach(function(plato){
    console.log(plato.nombre)
})

//2. filter
let resultado=platos.filter(function(plato){
    return(plato.categoria==2)
})

console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.precio>37000)

})
console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.categoria==1 || plato.categoria==3)

})
console.log(resultado)

//3.find
let busqueda=platos.find(function(plato){
    return(plato.precio==34000)
})
console.log(busqueda)

//4.map
let mapa=platos.map(function(plato){
    return(plato.categoria=100)
})
console.log(mapa)

//5.push
let platos2={
    nombre:"Lengua en Salsa Criolla",
    precio:31000,
    descripcion:'na',
    foto:'na',
    categoria:3
}

platos.push(plato2)
console.log(platos)





