// 3° Pre-Entrega

let productos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");
const detalleCarrito = document.getElementById("detalle-carrito");
const totalCarrito = document.getElementById("total-carrito");
const notificacion = document.getElementById("notificacion");

const mostrarNotificacion = (mensaje) => {
    notificacion.textContent = mensaje;
    notificacion.classList.remove("oculto");
    setTimeout(() => {
        notificacion.classList.add("oculto");
    }, 3000);
};

const renderizarProductos = () => {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${producto.rutaImagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button class="boton" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(div);
    });
};

const renderizarCarrito = () => {
    detalleCarrito.innerHTML = "";
    carrito.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio}</td>
            <td>$${item.cantidad * item.precio}</td>
        `;
        detalleCarrito.appendChild(fila);
    });
    totalCarrito.innerHTML = `<strong>Total: $${total}</strong>`;
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const agregarAlCarrito = (idProducto) => {
    const producto = productos.find(p => p.id === idProducto);
    const itemEnCarrito = carrito.find(item => item.id === idProducto);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    total += producto.precio;
    mostrarNotificacion(`Producto "${producto.nombre}" añadido al carrito.`);
    renderizarCarrito();
};

const cargarProductos = async () => {
    try {
        const response = await fetch("productos.json"); 
        if (!response.ok) throw new Error("No se pudieron cargar los productos.");
        productos = await response.json();
        renderizarProductos();
    } catch (error) {
        mostrarNotificacion("Error al cargar productos.");
        console.error(error);
    }
};

document.getElementById("finalizar-compra").addEventListener("click", () => {
    if (carrito.length === 0) {
        mostrarNotificacion("El carrito está vacío.");
        return;
    }

    if (carrito.reduce((acc, item) => acc + item.cantidad, 0) > 5) {
        total *= 0.9;
        mostrarNotificacion("Se aplicó un 10% de descuento por comprar más de 5 prendas.");
    }

    mostrarNotificacion(`Compra finalizada. Total pagado: $${total.toFixed(2)}.`);
    carrito = [];
    total = 0;
    renderizarCarrito();
});

document.getElementById("ver-productos").addEventListener("click", () => {
    contenedorProductos.style.display = "block";
    contenedorCarrito.style.display = "none";
});

document.getElementById("ver-carrito").addEventListener("click", () => {
    contenedorProductos.style.display = "none";
    contenedorCarrito.style.display = "block";
    renderizarCarrito();
});

// Inicialización
cargarProductos();
renderizarCarrito();

