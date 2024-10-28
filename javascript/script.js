// 1° Pre-Entrega


function tienda() {
    alert("Bienvenido/a a nuestra tienda");

    let opcion;
    let total = 0;
    let salir = false;
    
    do {
        let cantidad = 0;
        // Menú de opciones para seleccionar productos o salir
        opcion = pedirUnNumeroAlUsuario("Seleccione los productos que desea comprar:\n1 - Campera de abrigo $40000\n2 - Remera $20000\n3 - Jeans $30000\n4 - Bermudas $25000\n5 - Finalizar compra\n0 - Salir");
        
        if (opcion === 1) {
            cantidad = pedirUnNumeroAlUsuario("Ingrese cuántas camperas de abrigo desea llevar:");
            total += cantidad * 40000;
            alert("Producto añadido al carrito. Total actual: $" + total);
        } else if (opcion === 2) {
            cantidad = pedirUnNumeroAlUsuario("Ingrese cuántas remeras desea llevar:");
            total += cantidad * 20000;
            alert("Producto añadido al carrito. Total actual: $" + total);
        } else if (opcion === 3) {
            cantidad = pedirUnNumeroAlUsuario("Ingrese cuántos jeans desea llevar:");
            total += cantidad * 30000;
            alert("Producto añadido al carrito. Total actual: $" + total);
        } else if (opcion === 4) {
            cantidad = pedirUnNumeroAlUsuario("Ingrese cuántas bermudas desea llevar:");
            total += cantidad * 25000;
            alert("Producto añadido al carrito. Total actual: $" + total);
        } else if (opcion === 5) {
            if (total !== 0) {
                total = calcularImporteFinal(total);
                alert("Total: $" + total + ". Gracias por su compra, vuelva pronto.");
            } else {
                alert("No ha seleccionado ningún producto.");
            }
            salir = true;
        } else if (opcion === 0) {
            alert("Gracias por visitar nuestra tienda. ¡Hasta luego!");
            salir = true;
        } else {
            alert("Opción no válida, por favor intente de nuevo.");
        }
    } while (!salir);
}

    // Función para solicitar un número al usuario con un mensaje personalizado
function pedirUnNumeroAlUsuario(mensaje) {
    return Number(prompt(mensaje));
}

    // Función para calcular el importe final (puedes agregar descuentos aquí si es necesario)
function calcularImporteFinal(total) {
    return total;     // Puedes modificar para aplicar un descuento
}

// Llamada a la función principal para iniciar la tienda
tienda();
