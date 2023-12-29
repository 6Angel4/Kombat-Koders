const urlPedidoConfirmado ="../pedidoConfirmadoDemo.json";

// Código asíncrono
const getProducts = (url) => {
  // Realizando solicitud Get
   fetch(url)
     .then((response) => {
        console.log("status code: " + response.status); // 200
        return response.json();
     })
     .then(orden => {
        // console.log(products); 
        imprimirEnDOM(orden);
     })
     .catch((error) => {
        console.log("Error en la solicitud: ");
        console.warn(error);
     });
};

// Código síncrono
const getProductsUsingAsyncAwait = async ( url ) => {
  try {
     const response = await fetch(url);
     const orden = await response.json();
     imprimirEnDOM( orden );   
     
  } catch (error) {
     console.log( error );
  }

}

// getProducts(urlFakeStore);
getProductsUsingAsyncAwait(urlPedidoConfirmado);


function imprimirEnDOM(pedidoConfirmadoDemo){
const detallesCompraContainer = document.getElementById("detallesCompra");
    const orden = pedidoConfirmadoDemo.map((pedido) => `
    <div>
      <h1>Pedido confirmado</h1>      
    </div>

    <div class="row d-flex justify-content-start" id="numeroPedido">
      <div class="col-9 p-4">
        <p class="d-flex justify-content-start p-2"><strong>Resumen el pedido</strong></p>
        <p class="d-flex justify-content-start p-2"><strong>Número del pedido:&nbsp;</strong>${pedido.numeroDelPedido}</p>
      </div>
      <div class="col-3 pt-3">
        <img width="60px" src="../SRC/img/pets.png" alt="">
      </div>                
    </div>

    <div class="row d-flex justify-content-start">
      <div class="p-4"> 
        <p class="d-flex justify-content-start p-2"><strong>Detalles de compra</strong></p>
        <p class="d-flex justify-content-start p-2"><strong>Producto comprado:&nbsp;</strong> ${pedido.producto}</p>
        <p class="d-flex justify-content-start p-2"><strong>Nombre:&nbsp;</strong> ${pedido.nombre}</p>
        <p class="d-flex justify-content-start p-2"><strong>Dirección de envió:&nbsp;</strong> ${pedido.direccion}</p>
        <p class="d-flex justify-content-start p-2"><strong>Método de pago:&nbsp;</strong> ${pedido.metodoDePago}</p>
        <p class="d-flex justify-content-start p-2"><strong>Indicaciones:&nbsp;</strong>${pedido.indicaciones}</p>       
      </div>        
    </div>

    <div>  

      <div class="row d-flex justify-content-start">
        <div class="d-flex p-4 col-6 justify-content-center">
          <div class="p-4">
            <img width="100px" src="${pedido.imagen}" alt="">
          </div>            
        </div>
        <div class="d-flex col-6 justify-content-start align-items-center">
          <div>
            <p class="d-flex justify-content-start p-2"><strong>Subtotal:&nbsp;</strong> $${pedido.subtotal}</p>
            <p class="d-flex justify-content-start p-2"><strong>Envió:&nbsp;</strong> $${pedido.envio}</p>
            <p class="d-flex justify-content-start p-2"><strong>IVA(6%):&nbsp;</strong> $${pedido.iva}</p>
            <p class="d-flex justify-content-start p-2"><strong>TOTAL: $${pedido.total}</strong></p>
          </div>                    
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div class="p-4">
           <a href="#" class="btn btn-primary">Seguir comprando</a>
        </div>       
      </div>

    </div>    
    `
    );

    console.log("orden");
    detallesCompraContainer.innerHTML = orden.join("");
}

