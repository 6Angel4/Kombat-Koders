function borrarTodosElementos() {
  //llamar funcion que reformatee el html sin productos para vender
  //todosProductos =[];
  todosProductos.splice(0,todosProductos.length)

}



// borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 
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

// ===============================================================================
const todosProductos =[
  {
    "id": 1,
    "nombreProducto": "Science Diet",
    "contenidoProducto": 2.26,
    "precio": 640,
    "marca": "Hill's",
    "imagen": "https://www.hillspet.com.mx/content/dam/pim/hills/es_mx/sd/dry/sd-canine-adult-dry-productShot_zoom.jpg.rendition.991.991.jpg",
    "productoPara": "Perro",
    "tipoProducto": "Croquetas",
    "calificacionMaxima": 5
  },
  {
    "id": 2,
    "nombreProducto": "Medium Adult",
    "contenidoProducto": 13.61,
    "precio": 2648,
    "marca": "Royal Cannin",
    "imagen": "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e3dbe58a-e198-4e28-8900-1555c1ed14a9.49a40064f4cceb74b3a053399e30f301.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    "productoPara": "Perro",
    "tipoProducto": "Croquetas",
    "calificacionMaxima": 5
  },
  {
    "id": 3,
    "nombreProducto": "Salmon & Pea Recipe",
    "contenidoProducto": 2.26,
    "precio": 395,
    "marca": "Whole Hearted",
    "imagen": "https://www.petco.com.mx/medias/122518.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MzM0MzIzfGltYWdlL2pwZWd8aGNlL2gxZS8xMDIxMDg3Njk0ODUxMC8xMjI1MTguanBnXzEyMDBmdHd8MzA1MzM3ZDdlZDhlOGU0MTMzZTUwNDg1NWI2NTBjYjNhODIzZGQ4ODBlNTc3Zjk3MjQ4YzI2MTQ5MDQ3MWFkOQ",
    "productoPara": "Perro",
    "tipoProducto": "Croquetas",
    "calificacionMaxima": 5
  },

];
//
function modificarPublicacion(id, nuevoNombreProducto, nuevoContenidoProducto, nuevoPrecio, nuevaMarca, nuevaImagen, nuevoProductoPara, nuevoTipoProducto ) {
  const index = todosProductos.findIndex((producto) => producto.id == id);
  console.log("Indice encontrado: ",index);
  if (index !== -1) {
    console.log("objeto encontrado: " + JSON.stringify(todosProductos[index]));
    todosProductos[index].nombreProducto = nuevoNombreProducto; // sobreescribir
    todosProductos[index].contenidoProducto = nuevoContenidoProducto;
    todosProductos[index].precio = nuevoPrecio;
    todosProductos[index].marca = nuevaMarca;
    todosProductos[index].imagen = nuevaImagen;
    todosProductos[index].productoPara = nuevoProductoPara;
    todosProductos[index].tipoProducto = nuevoTipoProducto;
   
    console.log(`Publicación modificada: ${JSON.stringify(todosProductos[index])}`);
    //aqui iria una llamada al backend para hacer el cambio en la base de datos
  } else {
    console.log(`No se encontró la publicación con el ID: ${id}`);
  }
}
modificarPublicacion('1','chocolate','13.30');

borrarTodosElementos();
console.log(todosProductos);