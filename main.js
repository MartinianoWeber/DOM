
// EJERCICIO 1
function crearCuentaRegresiva(numero) {
    let array = []
    for (let i = numero; i >= 0; i--) {
        array.push(i)
    }
    return array
}
crearCuentaRegresiva(10)




let arrNum = [10, 5, 3, 2, 1, 4, 6, 7, 8, 9]
// EJERCICIO 2 y 3
let descendiente = arrNum.sort((a, b) => b - a)
let ascendente = arrNum.sort((a, b) => a - b)
console.log(descendiente)
console.log(ascendente)

let duplicados = [1, 1, 2, 2, 3, 3]

let sinDuplicados = duplicados.filter((elemento, indice) => duplicados.indexOf(elemento) === indice)
console.log(sinDuplicados)

let nuevoArr = new Set(duplicados)
let resultado = [...nuevoArr]
console.log(nuevoArr)

// EJERCICIO 4

let clientes = [
    {
        nombre: "Luciano",
        deuda: 10000,
        clientePreferencial: true
    },
    {
        nombre: "Andrea",
        deuda: 5000,
        clientePreferencial: false
    },
    {
        nombre: "Germán",
        deuda: 8000,
        clientePreferencial: false
    },
    {
        nombre: "Agustina",
        deuda: 12000,
        clientePreferencial: true
    }
]

function montoTotal() {


    let total = 0
    for (let i = 0; i < clientes.length; i++) {
        total += clientes[i].deuda
    }
    console.log(`Todos los clientes adeudan un total de: ${total}`)
}


// montoTotal()


function montoTotalConReduce() {
    let total = clientes.reduce((a, b) => a + b.deuda, 0)
    console.log(`Todos los clientes adeudan un total de: ${total}
    `)
}


// EJERCICIO 5


function montoTotalReduce() {
    let total = clientes.reduce((a, b) => a + b.deuda, 0)
    console.log(`Todos los clientes adeudan un total de: ${total}
    `)
    console.table(clientes)
}



function descuento() {
    clientes.forEach(elemento => {
        if (elemento.clientePreferencial) {
            let resta = elemento.deuda * 0.05
            elemento.deuda -= resta
        }
    })
}
descuento()
montoTotalReduce()
