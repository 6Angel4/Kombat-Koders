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
        cantidad.textContent = "1"; // Aquí puedes agregar un input para cambiar la cantidad
        row.appendChild(cantidad);

        let subtotal = document.createElement("td");
        subtotal.textContent = producto.precio; // Aquí puedes calcular el subtotal basado en la cantidad
        row.appendChild(subtotal);

        tableBody.appendChild(row);
      });
    });
  // === Leer el objeto JSON desde el archivo === //
});
