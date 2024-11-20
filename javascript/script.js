// 2° Pre-Entrega


// function tienda() {
//     alert("Bienvenido/a a nuestra tienda")

//     let opcion
//     let total = 0
//     let cantidadTotalPrendas = 0     // Para contar el numero total de prendas
//     let salir = false

//     do {
//         let cantidad = 0
//         opcion = pedirUnNumeroAlUsuario("Seleccione los productos que desea comprar:\n1 - Campera de abrigo $40000\n2 - Remera $20000\n3 - Jeans $30000\n4 - Bermudas $25000\n5 - Finalizar compra\n0 - Salir")

//         if (opcion === 1) {
//             cantidad = pedirUnNumeroValido("Ingrese cuántas camperas de abrigo desea llevar:")
//             total += cantidad * 40000
//             cantidadTotalPrendas += cantidad
//             alert("Producto añadido al carrito. Total actual: $" + total)
//         } else if (opcion === 2) {
//             cantidad = pedirUnNumeroValido("Ingrese cuántas remeras desea llevar:")
//             total += cantidad * 20000
//             cantidadTotalPrendas += cantidad
//             alert("Producto añadido al carrito. Total actual: $" + total)
//         } else if (opcion === 3) {
//             cantidad = pedirUnNumeroValido("Ingrese cuántos jeans desea llevar:")
//             total += cantidad * 30000
//             cantidadTotalPrendas += cantidad
//             alert("Producto añadido al carrito. Total actual: $" + total)
//         } else if (opcion === 4) {
//             cantidad = pedirUnNumeroValido("Ingrese cuántas bermudas desea llevar:")
//             total += cantidad * 25000
//             cantidadTotalPrendas += cantidad
//             alert("Producto añadido al carrito. Total actual: $" + total)
//         } else if (opcion === 5) {
//             if (total !== 0) {
//                 if (cantidadTotalPrendas > 5) {
//                     alert("¡Felicidades! Se ha aplicado un 10% de descuento por comprar más de 5 prendas.")
//                 }
//                 total = calcularImporteFinal(total, cantidadTotalPrendas)         // Para verificar el descuento
//                 alert("Total: $" + total + ". Gracias por su compra, vuelva pronto.")
//             } else {
//                 alert("No ha seleccionado ningún producto.")
//             }
//             salir = true
//         } else if (opcion === 0) {
//             alert("Gracias por visitar nuestra tienda. ¡Hasta luego!")
//             salir = true
//         } else {
//             alert("Opción no válida, por favor intente de nuevo.")
//         }
//     } while (!salir)
// }


// // Solicitar un numero al usuario con un mensaje personalizado
// function pedirUnNumeroAlUsuario(mensaje) {
//     let numero
//     do {
//         numero = Number(prompt(mensaje))
//         if (isNaN(numero) || numero < 0) {
//             alert("Por favor, ingrese un número válido.")
//         }
//     } while (isNaN(numero) || numero < 0)
//     return numero
// }

// // Solicitar un numero de cantidad valido
// function pedirUnNumeroValido(mensaje) {
//     let numero
//     do {
//         numero = Number(prompt(mensaje))
//         if (isNaN(numero) || numero <= 0) {
//             alert("Por favor, ingrese un número válido mayor que cero.")
//         }
//     } while (isNaN(numero) || numero <= 0)
//     return numero
// }

// // Para calcular el importe final con descuento
// function calcularImporteFinal(total, cantidadTotalPrendas) {
//     if (cantidadTotalPrendas > 5) {
//         total *= 0.9 // Aplique un 10% de descuento
//     }
//     return total
// }


// tienda()

//----------------------------------------------------



// // Definimos un array de objetos con la información de los productos
// const productos = [
//     { id: 1, nombre: "Campera de abrigo", precio: 40000, descripcion: "Campera abrigada para invierno." },
//     { id: 2, nombre: "Remera", precio: 20000, descripcion: "Remera cómoda y fresca." },
//     { id: 3, nombre: "Jeans", precio: 30000, descripcion: "Jeans resistentes y de moda." },
//     { id: 4, nombre: "Bermudas", precio: 25000, descripcion: "Bermudas ideales para el verano." }
// ];

// // Función para mostrar información de un producto por nombre
// function buscarProductoPorNombre(nombre) {
//     const producto = productos.find(prod => prod.nombre.toLowerCase() === nombre.toLowerCase());
//     if (producto) {
//         alert(`Producto: ${producto.nombre}\nPrecio: $${producto.precio}\nDescripción: ${producto.descripcion}`);
//     } else {
//         alert("Producto no encontrado. Por favor, revise el nombre e intente de nuevo.");
//     }
// }

// // Función para listar todos los productos disponibles
// function listarProductos() {
//     const lista = productos.map(prod => `${prod.id} - ${prod.nombre} $${prod.precio}`).join("\n");
//     alert("Productos disponibles:\n" + lista);
// }

// // Ejemplo de uso para obtener información del usuario
// function informacionProductos() {
//     let salir = false;
//     do {
//         let opcion = prompt("Seleccione una opción:\n1 - Listar todos los productos\n2 - Buscar producto por nombre\n0 - Salir");

//         if (opcion === "1") {
//             listarProductos();
//         } else if (opcion === "2") {
//             let nombreProducto = prompt("Ingrese el nombre del producto que desea buscar:");
//             buscarProductoPorNombre(nombreProducto);
//         } else if (opcion === "0") {
//             salir = true;
//             alert("Gracias por visitar nuestra tienda. ¡Hasta luego!");
//         } else {
//             alert("Opción no válida. Por favor, intente de nuevo.");
//         }
//     } while (!salir);
// }

// informacionProductos();


function tienda() {
    alert("Bienvenido/a a nuestra tienda");

    // Array de objetos para los productos
    const productos = [
        { id: 1, nombre: "Campera de abrigo", precio: 40000 },
        { id: 2, nombre: "Remera", precio: 20000 },
        { id: 3, nombre: "Jeans", precio: 30000 },
        { id: 4, nombre: "Bermudas", precio: 25000 }
    ];

    let total = 0;
    let cantidadTotalPrendas = 0;
    let salir = false;

    do {
        let menu = "Seleccione los productos que desea comprar:\n";
        productos.forEach((producto) => {
            menu += `${producto.id} - ${producto.nombre} $${producto.precio}\n`;
        });
        menu += "5 - Finalizar compra\n0 - Salir";

        let opcion = pedirUnNumeroAlUsuario(menu);

        if (opcion >= 1 && opcion <= 4) {
            const productoSeleccionado = productos.find(p => p.id === opcion);
            let cantidad = pedirUnNumeroValido(`Ingrese cuántas ${productoSeleccionado.nombre} desea llevar:`);
            total += cantidad * productoSeleccionado.precio;
            cantidadTotalPrendas += cantidad;
            alert(`Producto añadido al carrito. Total actual: $${total}`);
        } else if (opcion === 5) {
            if (total !== 0) {
                if (cantidadTotalPrendas > 5) {
                    alert("¡Felicidades! Se ha aplicado un 10% de descuento por comprar más de 5 prendas.");
                }
                total = calcularImporteFinal(total, cantidadTotalPrendas);
                alert(`Total: $${total}. Gracias por su compra, vuelva pronto.`);
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

// Solicitar un número al usuario con un mensaje personalizado
function pedirUnNumeroAlUsuario(mensaje) {
    let numero;
    do {
        numero = Number(prompt(mensaje));
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numero) || numero < 0);
    return numero;
}

// Solicitar un número de cantidad válido
function pedirUnNumeroValido(mensaje) {
    let numero;
    do {
        numero = Number(prompt(mensaje));
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingrese un número válido mayor que cero.");
        }
    } while (isNaN(numero) || numero <= 0);
    return numero;
}

// Para calcular el importe final con descuento
function calcularImporteFinal(total, cantidadTotalPrendas) {
    if (cantidadTotalPrendas > 5) {
        total *= 0.9; // Aplica un 10% de descuento
    }
    return total;
}

tienda();
