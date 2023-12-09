// Create a ItemsController class
class ControladorProductos {
  // Set up the items and currentId property in the contructor
  constructor(idActual = 0) {
      this.productos = [];
      this.idActual = idActual;
  }

  // Función agregar productos
  agregarProducto(name, brand, description, animal, category, quantity, price, discount, image) {
   
      const producto = {
          // Increment the currentId property
          id: this.idActual++,
          nombreProducto: name,
          marcaProducto: brand,
          descripcionProducto: description,
          imagenProducto: image,
          animalProducto: animal,
          categoriaProducto: category,
          cantidadProducto: quantity,
          precioProducto: price,
          descuentoProducto: discount,          
          fechaProducto: new Date().getTime()
        };

      // Push the item to the items property
      this.productos.push(producto);
      this.pushProductosLocalStorage();
      imprimirEnDOM(this.productos);
  }   
   
  pushProductosLocalStorage(){
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }

// Función para borrar un producto por su índice
  borrarProducto(id) {
  this.productos.splice(id, 1);
  this.pushProductosLocalStorage();
  imprimirEnDOM(this.productos);
  }

 // Función para modificar un producto
 modificarProducto(id, nuevoNombreProducto,  nuevoDescripcionProducto, nuevoMarcaProducto, nuevoAnimalProducto, nuevoCategoriaProducto, nuevoCantidadProducto, nuevoPrecioProducto, nuevoDescuentoProducto, nuevoImagenProducto){
  const index = this.productos.findIndex((producto) => producto.id == id);
  console.log("Indice encontrado: ",index);
  if (index !== -1) {
    console.log("objeto encontrado: " + JSON.stringify(this.productos[index]));
    this.productos[index].nombreProducto = nuevoNombreProducto; // sobreescribir
    this.productos[index].descripcionProducto = nuevoDescripcionProducto;
    this.productos[index].marcaProducto = nuevoMarcaProducto;
    this.productos[index].animalProducto = nuevoAnimalProducto;
    this.productos[index].categoriaProducto = nuevoCategoriaProducto;
    this.productos[index].cantidadProducto = nuevoCantidadProducto;
    this.productos[index].precioProducto= nuevoPrecioProducto;
    this.productos[index].descuentoProducto = nuevoDescuentoProducto;
    this.productos[index].imagenProducto = nuevoImagenProducto;
    this.productos[index].fechaProducto = new Date().getTime();  
    

    console.log(`Publicación modificada:${JSON.stringify(this.productos[index])}`);
    this.pushProductosLocalStorage();
    imprimirEnDOM(this.productos);

    // Aquí iría una llamada al backend para hacer el cambio en la base de datos
  } else {
    console.log(`No se encontró la publicación con el ID: ${id}`);
    
  }
}


// Función para borrar todos los productos
  borrarTodosProductos() {
  this.productos.splice(0,this.productos.length)
  this.pushProductosLocalStorage();
  imprimirEnDOM(this.productos);
 }  

};

// Función para cargar del Local Storage

  function cargarProductosFromLocalStorage(miObjeto) {
      const storageProductos = localStorage.getItem("productos")
      if (storageProductos) {
                
        const productos = JSON.parse(storageProductos)
      
          for (let i = 0; i < productos.length; i++) {
              const producto = productos[i];
           
              // miObjeto.productos.push(producto);
          }
       } 
  }

  
 /*iniciar funciones hasta que haya respuesta, para que las funciones no compilen antes de la respuesta
    el código carga información de productos desde un archivo JSON, la almacena en el localStorage y luego utiliza esa información para generar 
    y mostrar tarjetas de productos en el DOM de la página web. Además, opcionalmente, muestra en la consola la información almacenada en el 
    localStorage con la clave "todosProducto".*/


    function imprimirEnDOM(producto) {
      const contenedorProductos = document.getElementById("productos-contenedor");

      const articulos = producto.map((producto, index, array) => `
                
                  <div class="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3">
                    <div class="card border-0 mb-5"><!--Aqui esta la primera tarjeta de producto-->
                      <img src="${producto.imagenProducto}" class="card-img-top" alt="..." />
                      <div class="card-body text-center d-flex align-items-center justify-content-between flex-column">
                        <div>
                          <h5 class="card-title">${producto.nombreProducto}</h5>
                          <p class="card-text">${producto.descripcionProducto}</p>
                          <p>$${producto.precioProducto}</p>
                        </div>
                        <a href="#" class="btn btn-primary">Añadir a carrito</a>
                      </div>
                    </div> 
                  </div>         
           `
      );

      console.log(articulos);
      contenedorProductos.innerHTML = articulos.join("");
    }
   
        
const miControladorProductos = new ControladorProductos(0);
cargarProductosFromLocalStorage (miControladorProductos); 

miControladorProductos.agregarProducto("Chicken & Pea Recipe","", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "", "", "", 640, "", "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3275114-center-1");

miControladorProductos.agregarProducto("Medium Adult", "", "Croquetas Medium Adult de Royal Cannin para perros adultos. Fórmula especial para razas medianas.", "", "", "", 2648, "", "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e3dbe58a-e198-4e28-8900-1555c1ed14a9.49a40064f4cceb74b3a053399e30f301.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF");

miControladorProductos.agregarProducto("Salmon & Pea Recipe", "", "Croquetas Salmon & Pea Recipe de Whole Hearted para perros. Con ingredientes de alta calidad.", "", "", "", 395, "",  "https://www.petco.com.mx/medias/122518.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MzM0MzIzfGltYWdlL2pwZWd8aGNlL2gxZS8xMDIxMDg3Njk0ODUxMC8xMjI1MTguanBnXzEyMDBmdHd8MzA1MzM3ZDdlZDhlOGU0MTMzZTUwNDg1NWI2NTBjYjNhODIzZGQ4ODBlNTc3Zjk3MjQ4YzI2MTQ5MDQ3MWFkOQ",);

miControladorProductos.agregarProducto("Chicken & Pea Recipe", "", "Croquetas Chicken & Pea Recipe de Whole Hearted para perros. Delicioso sabor a pollo y guisantes.", "", "", "", 308, "", "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3275114-center-1");

miControladorProductos.agregarProducto("Real Bison", "", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "", "", "", 720, "", "https://cdn11.bigcommerce.com/s-lnkn0tcvqc/images/stencil/960w/products/937/1158/2023_Pure_Bison_withGrain22lb_front-pack__94339.1680129900.jpg?c=1");

miControladorProductos.agregarProducto("Pro Plan Adult Optihealt", "", "Croquetas Pro Plan Adult Optihealt de Purina para perros adultos. Fórmula balanceada para una salud óptima.", "", "", "", 800, "", "https://www.petco.com.mx/medias/104562.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDgwNDA1fGltYWdlL2pwZWd8aGMyL2hhMC8xMDIxMDU0NDg3NzU5OC8xMDQ1NjIuanBnXzEyMDBmdHd8ZDAzMjBlNTg1ZmZmMjVlNGRjYTA0MWM2MWNiMzlhN2RmZTBhNzdiMmU2MDFjNzdlZWNkMGRiNTdmNTZmODhkMA");

miControladorProductos.agregarProducto("Chicken & Pea Recipe", "", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "", "", "", 355, "", "https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3wzMDU0MDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2hiZi85NDAzMjI5NjM0NTkwLmpwZ3wwOTI0YWY5YzFlYzY2YWFjY2U5Nzk1NjUwNGQ1NTY3M2U1ZTRjNzcwYzRlYjM0MmY2ZGE2YWQ0MzJmMGNhN2U1");

miControladorProductos.agregarProducto( "Healthy Weight Recipe", "", "Croquetas Healthy Weight Recipe de Merrick para perros. Fórmula especial para mantener un peso saludable.", "", "", "", 680, "", "https://amorperruno.mx/wp-content/uploads/2020/06/descarga-6-300x300.jpg");

miControladorProductos.agregarProducto("Real Salmon & Sweet Potato Recipe", "", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "", "", "", 720, "", "https://www.petco.com.mx/medias/123028.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjYxMTc1fGltYWdlL2pwZWd8aDI2L2gwYi8xMDM4MzY0MzgzNjQ0Ni8xMjMwMjguanBnXzEyMDBmdHd8OTJjMjQyODRiMTM2MzIzOGYwZGExMTM4ZDhlYTg5MTg5ZWNkOTQ1YzIxZTI0NDIzMjU4OWU1NDFhZmFiODMzYg");

miControladorProductos.agregarProducto("Real Bison, Beef+Sweat Potato Recipe", "", "Croquetas Real Bison, Beef+Sweat Potato Recipe de Merrick para perros. Elaboradas con carne de bisonte real, carne de res y batata."
, "", "", "", 680, "", "https://m.media-amazon.com/images/I/813nUhMqr7L._AC_SY355_.jpg");




// 
   //llamar funcion que reformatee el html sin productos para vender
   
  //  localStorage.setItem("producto", []);
   //localStorage.clear();// afecta todos los datos
// }

// borrarTodosElementos();

//llamada a funcion que eliminara todos los elementos, 


// function borrarTodosElementos(productos) {
//    productos =[];

// }

// borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 
// Función que recibe los datos que provienen del formulario en HTML

// const agregarProducto = () => {
//   const nombreProducto = document.getElementById("nombreProducto").value;
//   const contenidoProducto = document.getElementById("contenidoProducto").value;
//   const precio = document.getElementById("precio").value;
//   const marca = document.getElementById("marca").value;
//   const tipoProducto = document.getElementById("tipoProducto").value;

//   producto.agregarProducto(
//     nombreProducto,
//     contenidoProducto,
//     precio,
//     marca,
//     tipoProducto
//   );

//   console.log(producto.productoJSON());
// };

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



//Eliminar producto
// deleteItem(id) {
//   const index = this.items.findIndex(item => item.id === id);
//   if (index !== -1) {
//       this.items.splice(index, 1);
//       localStorage.setItem("items", JSON.stringify(this.items));
//   }
// }
// //Refresca los productos
// loadItemsFromLocalStorage() {
//   const storageItems = localStorage.getItem("items");
//   if (storageItems) {
//       this.items = JSON.parse(storageItems);
//   }
// }
// //eliminar desde un boton
// deleteButton.addEventListener('click', () => {
//   itemsController.deleteItem(productId);
// });
