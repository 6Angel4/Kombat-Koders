const urlProductos ="../productos.json";


const getProductos = (url) => {
fetch(url)
.then((response) => {
  console.log("status code: " + response.status); // 200
  return response.json();
})
.then( productos => {
  // console.log(products); 
  imprimirEnDOM( productos );
} )
.catch((error) => {
  console.log("Error en la solicitud: ");
  console.warn(error);
});
}


const getProductosUsandoAsyncAwait = async ( url ) => {
  try {
     const response = await fetch(url);
     const productos = await response.json();
     imprimirEnDOM( productos );   
     
  } catch (error) {
     console.log( error );
  }

}

getProductosUsandoAsyncAwait(urlProductos);

function imprimirEnDOM( productos ) {
    const contenedorProductos = document.getElementById("productos-contenedor");

    const articulos = productos.map( (producto, index, array)=> `
        
          <div class="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3">
            <div class="card border-0 mb-5"><!--Aqui esta la primera tarjeta de producto-->
              <img src="${producto.imagen}" class="card-img-top" alt="..." />
              <div class="card-body text-center d-flex align-items-center justify-content-between flex-column">
                <div>
                  <h5 class="card-title">${producto.nombreProducto}</h5>
                  <p class="card-text">${producto.Descripcion}</p>
                  <p>$${producto.precio}</p>
                </div>
                <a href="#" class="btn btn-primary">Añadir a carrito</a>
              </div>
            </div> 
          </div>         
   `     
    );    
   
    console.log( articulos );
    contenedorProductos.innerHTML =  articulos.join("");
   
 }




