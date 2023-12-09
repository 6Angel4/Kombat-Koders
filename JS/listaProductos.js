 /*iniciar funciones hasta que haya respuesta, para que las funciones no compilen antes de la respuesta
    el código carga información de productos desde un archivo JSON, la almacena en el localStorage y luego utiliza esa información para generar 
    y mostrar tarjetas de productos en el DOM de la página web. Además, opcionalmente, muestra en la consola la información almacenada en el 
    localStorage con la clave "todosProducto".*/

// let todosProductos; // Declara una variable para almacenar el JSON

// fetch('../productos.json')
//   .then((response) => response.json())
//   .then((json) => {
//     todosProductos = json; // Almacena el JSON en la variable todosProductos
//     localStorage.setItem("todosProductos", JSON.stringify(todosProductos));//guardar datos en local storage
//     console.log(todosProductos);

   

//     function imprimirEnDOM(producto) {
//       const contenedorProductos = document.getElementById("productos-contenedor");

//       const articulos = producto.map((producto, index, array) => `
                
//                   <div class="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3">
//                     <div class="card border-0 mb-5"><!--Aqui esta la primera tarjeta de producto-->
//                       <img src="${producto.imagen}" class="card-img-top" alt="..." />
//                       <div class="card-body text-center d-flex align-items-center justify-content-between flex-column">
//                         <div>
//                           <h5 class="card-title">${producto.nombreProducto}</h5>
//                           <p class="card-text">${producto.descripcion}</p>
//                           <p>$${producto.precio}</p>
//                         </div>
//                         <a href="#" class="btn btn-primary">Añadir a carrito</a>
//                       </div>
//                     </div> 
//                   </div>         
//            `
//       );

//       console.log(articulos);
//       contenedorProductos.innerHTML = articulos.join("");

//     }
//     imprimirEnDOM(todosProductos);

//     const datos = localStorage.getItem("todosProductos");//que datos hay en local storage que se guardo
//     console.log("Productos: ", JSON.parse(datos));

//   })
//   .catch((error) => console.error('Error fetching the JSON:', error));




// let productos; // Declara una variable para almacenar el JSON

    // fetch('../prueba.json')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     productos = json; // Almacena el JSON en la variable todosProductos
    //     localStorage.setItem("productos", JSON.stringify(productos));//guardar datos en local storage
    //     console.log(productos);   
   
    //     imprimirEnDOM(productos);
    
    //     const datos = localStorage.getItem("productos");//que datos hay en local storage que se guardo
    //     console.log("Productos: ", JSON.parse(datos));
    
    //   })
    //   .catch((error) => console.error('Error fetching the JSON:', error));
    


