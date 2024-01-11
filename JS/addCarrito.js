import {ControladorCarrito} from "../JS/controladorCarrito.js";
// === Referencias === //
const tabla = document.getElementById("table");
const tableRow = document.getElementById("tr");
const tableBody = document.getElementById("tbody");
const botonProcederPago = document.getElementById("botonProcederPago");

// === Referencias === //

document.addEventListener("DOMContentLoaded", function () {
    // === Leer el objeto JSON desde el archivo === //
            const miControladorCarrito = new ControladorCarrito();
            const productos=miControladorCarrito.cargarProductosFromLocalStorage();

            // Ahora 'productos' es un array
            productos.forEach((producto) => {
                // Recorre cada 'producto' en el array 'productos'
                const row = document.createElement("tr");
                const eliminar = document.createElement("td");
                const botonEliminar = document.createElement("button");
                const nombreProducto = document.createElement("td");
                const precio = document.createElement("td");
                const cantidad = document.createElement("td");
                const inputCantidad = document.createElement("input");
                const subtotal = document.createElement("td");
                botonEliminar.classList.add("btn-primary","btn");
                inputCantidad.classList.add("InputCarrito");
                nombreProducto.classList.add("align-middle");
                precio.classList.add("align-middle");
                cantidad.classList.add("align-middle");
                subtotal.classList.add("align-middle");
                botonEliminar.textContent = "Eliminar";
                
                botonEliminar.addEventListener("click", function () {
                    // eliminar la fila de la tabla:
                    row.remove();
                    //Eliminar producto del carrito
                    miControladorCarrito.borrarProducto(producto.id);
                    // Actualizar el total después de eliminar la fila
                    actualizarTotal();
                });
                
                eliminar.appendChild(botonEliminar);
                row.appendChild(eliminar);
                nombreProducto.textContent = producto.nombreProducto;
                row.appendChild(nombreProducto);
                precio.textContent = producto.precioProducto;
                row.appendChild(precio);
                inputCantidad.type = "number";
                inputCantidad.value = producto.cantidadProducto;
                inputCantidad.classList.add("input-cantidad");

                inputCantidad.addEventListener("input", function () {
                    actualizarSubtotal(row, producto.precioProducto);
                    miControladorCarrito.actualizarCantidadProducto(producto.id, Number(inputCantidad.value));
                    if (inputCantidad.value == 0 || inputCantidad.value < 0){
                        row.remove();
                        //Eliminar producto del carrito
                        miControladorCarrito.borrarProducto(producto.id);
                    }
                    actualizarTotal();
                });

                cantidad.appendChild(inputCantidad);
                row.appendChild(cantidad);

                subtotal.classList.add("subtotal");
                subtotal.textContent = producto.precioProducto; // Subtotal inicial
                row.appendChild(subtotal);

                tableBody.appendChild(row);
            });

    // === BOTON === //
    botonProcederPago.addEventListener("click", function () {
        alert("Proceder al Pago"); // Aquí puedes implementar la lógica para proceder al pago
    });
    // === BOTON === //

    // === EVENTO PARA AJUSTAR LA CANTIDAD === //
    tableBody.addEventListener("input", function (event) {
        if (event.target.tagName === "INPUT" && event.target.classList.contains("input-cantidad")) {
            const inputCantidad = event.target;
            const cantidad = parseInt(inputCantidad.value);
            const row = inputCantidad.closest("tr");
            const precio = parseFloat(row.querySelector("td:nth-child(3)").textContent);
            actualizarSubtotal(row, precio);
        }
    });
    // === EVENTO PARA AJUSTAR LA CANTIDAD === //

    // Función para actualizar el subtotal
    function actualizarSubtotal(row, precio) {
        const cantidad = parseInt(row.querySelector(".input-cantidad").value);
        const subtotal = row.querySelector(".subtotal");
        const totalElement = document.getElementById("totalCompra");

        // Actualizar el subtotal
        subtotal.textContent = (precio * cantidad).toFixed(2);

        // Recalcular el total sumando todos los subtotales
        let total = 0;
        const filas = tableBody.querySelectorAll("tr");
        filas.forEach((fila) => {
            total += parseFloat(fila.querySelector(".subtotal").textContent);
        });

        // Actualizar el elemento HTML que muestra el total
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Función para actualizar el total después de eliminar una fila
    function actualizarTotal() {
        const totalElement = document.getElementById("totalCompra");
        let total = 0;

        // Recorrer todas las filas y sumar los subtotales
        const filas = tableBody.querySelectorAll("tr");
        filas.forEach((fila) => {
            total += parseFloat(fila.querySelector(".subtotal").textContent);
        });

        // Actualizar el elemento HTML que muestra el total
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
    actualizarTotal();
});