<<<<<<< HEAD


function borrarTodosElementos() {
   //llamar funcion que reformatee el html sin productos para vender
   
   localStorage.setItem("producto", []);
   //localStorage.clear();// afecta todos los datos
}

borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 


// function borrarTodosElementos(productos) {
//    productos =[];

// }

// borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 
=======
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
>>>>>>> e2675dfa1c5307c9d83a00913b6cd32b4a8b60ad
