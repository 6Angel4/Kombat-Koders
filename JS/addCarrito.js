// === Referencias === //
const tabla = document.getElementById("table");
const tableRow = document.getElementById("tr");
const tableBody = document.getElementById("tbody");
const botonProcederPago = document.getElementById("botonProcederPago");
const jsonPath = "../productos.json";
// === Referencias === //

document.addEventListener("DOMContentLoaded", function () {
  // === Leer el objeto JSON desde el archivo === //
  fetch(jsonPath)
    .then((response) => response.json())
    .then((productos) => {
      // Ahora 'productos' es un array
      productos.forEach((producto) => {
        // Recorre cada 'producto' en el array 'productos'
        let row = document.createElement("tr");

        let eliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
          // eliminar la fila de la tabla:
          row.remove();
          // Actualizar el total después de eliminar la fila
          actualizarTotal();
        });
        eliminar.appendChild(botonEliminar);
        row.appendChild(eliminar);

        let nombreProducto = document.createElement("td");
        nombreProducto.textContent = producto.nombreProducto;
        row.appendChild(nombreProducto);

        let precio = document.createElement("td");
        precio.textContent = producto.precio;
        row.appendChild(precio);

        let cantidad = document.createElement("td");
        let inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.value = 1;
        inputCantidad.classList.add("input-cantidad");
        inputCantidad.addEventListener("input", function () {
          actualizarSubtotal(row, producto.precio);
        });
        cantidad.appendChild(inputCantidad);
        row.appendChild(cantidad);

        let subtotal = document.createElement("td");
        subtotal.classList.add("subtotal");
        subtotal.textContent = producto.precio; // Subtotal inicial
        row.appendChild(subtotal);

        tableBody.appendChild(row);
      });
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
});
