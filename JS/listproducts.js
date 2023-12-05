// Función que recibe los datos que provienen del formulario en HTML

const agregarProducto = () => {
  const nombreProducto = document.getElementById("nombreProducto").value;
  const contenidoProducto = document.getElementById("contenidoProducto").value;
  const precio = document.getElementById("precio").value;
  const marca = document.getElementById("marca").value;
  const tipoProducto = document.getElementById("tipoProducto").value;

  producto.agregarProducto(
    nombreProducto,
    contenidoProducto,
    precio,
    marca,
    tipoProducto
  );

  console.log(producto.productoJSON());
};

// Agregar productos - Ejemplo Respositorio

// class ControlProducto {
//     constructor(productoId=0){
//         this.producto = [];
//         this.productoId = productoId;
//     }

//     agregarProducto(nombreProducto, contenidoProducto, precio, marca, tipoProducto) {
//         const articulo = {

//             id: this.productoId++,
//             nombreProducto: nombreProducto,
//             contenidoProducto: contenidoProducto,
//             precio: precio,
//             marca: marca,
//             tipoProducto: tipoProducto
//         };

//         this.producto.push(articulo);
//     }
//         productoJSON(){
//             return JSON.stringify(this.producto)
//         }
// }
