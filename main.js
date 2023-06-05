//Código de la calculadora de promedio de notas
// 1. Pedir nombre del usuario
// 2. Pedir cantidad de notas a ingresar
// 3. Pedir las notas
// 4. Calcular el total
// 5. Calcular el promedio
// 6. Mostrar el promedio

function saludarUsuario() {
    let inputNombre
    do {
        inputNombre = prompt("Por favor ingresa tu nombre:");
        if (inputNombre != "" && inputNombre != null) {
            alert(`Hola ${inputNombre}, bienvenido/a la calculadora de promedio de notas.`)
        }
        else {
            alert("No ingresaste tu nombre para continuar")
        }

    } while (inputNombre == "" || inputNombre == null)
}

function pedirCantidadNotas() {
    let cantNotas
    do {
        cantNotas = parseInt(prompt("Ingrese cuantas notas desea cargar, recuerde que debe ser un número mayor a 0 y menor a 11"))
        if (cantNotas <= 0 || isNaN(cantNotas || cantNotas > 10)) {
            alert("Por favor ingrese un número válido")
        }
    } while (cantNotas <= 0 || isNaN(cantNotas) || cantNotas > 10)
    return cantNotas
}

function pedirNota() {
    let nota
    do {
        nota = parseInt(prompt("Ingrese el valor de la nota, recuerde que es una escala del 0 al 10"))
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("Por favor ingrese un número válido")
        }
    } while (nota < 0 || nota > 10 || isNaN(nota))
    return nota
}

function calcularTotal(cantNotas) {
    let total = 0
    for (let i = 1; i <= cantNotas; i++) {
        let nota = pedirNota()
        total = total + nota
        console.log(`el total parcial es ${total}`)
        console.log(`la promedio parcial es ${total / i}`)
    }
    return total
}


saludarUsuario()
let cantNotas = pedirCantidadNotas()
let promedioTotal = calcularTotal(cantNotas)
let promedio = promedioTotal / cantNotas
alert(`El promedio es ${promedio}`)

