// 2° Pre-Entrega


function tienda() {
    alert("Bienvenido/a a nuestra tienda")

    let opcion
    let total = 0
    let cantidadTotalPrendas = 0     // Para contar el numero total de prendas
    let salir = false

    do {
        let cantidad = 0
        opcion = pedirUnNumeroAlUsuario("Seleccione los productos que desea comprar:\n1 - Campera de abrigo $40000\n2 - Remera $20000\n3 - Jeans $30000\n4 - Bermudas $25000\n5 - Finalizar compra\n0 - Salir")

        if (opcion === 1) {
            cantidad = pedirUnNumeroValido("Ingrese cuántas camperas de abrigo desea llevar:")
            total += cantidad * 40000
            cantidadTotalPrendas += cantidad
            alert("Producto añadido al carrito. Total actual: $" + total)
        } else if (opcion === 2) {
            cantidad = pedirUnNumeroValido("Ingrese cuántas remeras desea llevar:")
            total += cantidad * 20000
            cantidadTotalPrendas += cantidad
            alert("Producto añadido al carrito. Total actual: $" + total)
        } else if (opcion === 3) {
            cantidad = pedirUnNumeroValido("Ingrese cuántos jeans desea llevar:")
            total += cantidad * 30000
            cantidadTotalPrendas += cantidad
            alert("Producto añadido al carrito. Total actual: $" + total)
        } else if (opcion === 4) {
            cantidad = pedirUnNumeroValido("Ingrese cuántas bermudas desea llevar:")
            total += cantidad * 25000
            cantidadTotalPrendas += cantidad
            alert("Producto añadido al carrito. Total actual: $" + total)
        } else if (opcion === 5) {
            if (total !== 0) {
                if (cantidadTotalPrendas > 5) {
                    alert("¡Felicidades! Se ha aplicado un 10% de descuento por comprar más de 5 prendas.")
                }
                total = calcularImporteFinal(total, cantidadTotalPrendas)         // Para verificar el descuento
                alert("Total: $" + total + ". Gracias por su compra, vuelva pronto.")
            } else {
                alert("No ha seleccionado ningún producto.")
            }
            salir = true
        } else if (opcion === 0) {
            alert("Gracias por visitar nuestra tienda. ¡Hasta luego!")
            salir = true
        } else {
            alert("Opción no válida, por favor intente de nuevo.")
        }
    } while (!salir)
}

// Solicitar un numero al usuario con un mensaje personalizado
function pedirUnNumeroAlUsuario(mensaje) {
    let numero
    do {
        numero = Number(prompt(mensaje))
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingrese un número válido.")
        }
    } while (isNaN(numero) || numero < 0)
    return numero
}

// Solicitar un numero de cantidad valido
function pedirUnNumeroValido(mensaje) {
    let numero
    do {
        numero = Number(prompt(mensaje))
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingrese un número válido mayor que cero.")
        }
    } while (isNaN(numero) || numero <= 0)
    return numero
}

// Para calcular el importe final con descuento
function calcularImporteFinal(total, cantidadTotalPrendas) {
    if (cantidadTotalPrendas > 5) {
        total *= 0.9 // Aplique un 10% de descuento
    }
    return total
}


tienda()
