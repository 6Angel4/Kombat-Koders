const productoCompra = document.getElementById("productoCompra");
const subtotal = document.getElementById("subtotal");
const envio = document.getElementById("envio");
const iva = document.getElementById("iva");
const total = document.getElementById("total");
const descripcion = document.getElementById("descripcion");
const jsonPath = "../productos.json";

document.addEventListener("DOMContentLoaded", function () {
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => {
      // Los datos se encuentran en el primer elemento
      const producto = data[0]; //el elemento en el indice 0

      // Actualizar el DOM con los datos del producto
      productoCompra.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" style="width:15rem" class="me-4">`;
      descripcion.textContent = producto.descripcion;
      subtotal.textContent = producto.precio;

      // Calcular y mostrar el IVA y el total
      const precio = parseFloat(producto.precio);
      const costoEnvio = 89.0;
      const ivaCalculado = precio * 0.16;
      const totalCalculado = precio + costoEnvio + ivaCalculado;

      envio.textContent = `$${costoEnvio.toFixed(2)}`;
      iva.textContent = `$${ivaCalculado.toFixed(2)}`;
      total.textContent = `$${totalCalculado.toFixed(2)}`;
    })
    .catch((error) => console.error("Error:", error));
});
