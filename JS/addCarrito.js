// === Referencias === //
const tabla = document.getElementById("table");
const tableRow = document.getElementById("tr");
const tableBody = document.getElementById("tbody");
const botonProcederPago = document.getElementById("botonProcederPago");
const imagen = document.createElement("img"); // Crea un elemento, una imagen en este caso
// === Referencias === //

//  === Esconder Tabla si el carro está vacío   === //
if (tableBody.childElementCount === 0) {
  // Ocultar la tabla
  tabla.style.display = "none";
  // Ocultar el botón de proceder al pago
  botonProcederPago.style.display = "none";
  // Añadir la imagen al body
} else {
  // Mostrar la tabla si hay elementos en el tbody
  tabla.style.display = "table";
}
//  === Esconder Tabla si el carro está vacío   === //

//  === Muestra en DOM  === //

//  === Muestra en DOM  === //

// === BOTON === //
//Creo que esto es de Livi
// === BOTON === //
tabla.style.display = "table";