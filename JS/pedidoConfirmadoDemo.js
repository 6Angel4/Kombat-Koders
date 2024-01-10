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
        <p class="d-flex justify-content-start p-2">
        <strong>Número del pedido:&nbsp;</strong>
        ${pedido.numeroDelPedido}
        </p>
      </div>
      <div class="col-3 pt-3">
        <img width="60px" src="../SRC/img/pets.png" alt="">
      </div>                
    </div>

    <div class="row d-flex justify-content-start">
      <div class="p-4"> 
        <p class="d-flex justify-content-start p-2"><strong>Detalles de compra</strong></p>
        <p class="justify-content-start p-2 resp" ><strong>Producto comprado:&nbsp;</strong> </p>
        <p class="justify-content-start p-2 resp" >${pedido.producto}</p> <br>
        <p class="justify-content-start p-2 resp" ><strong>Nombre:&nbsp;</strong> </p>
        <p class="justify-content-start p-2 resp" >${pedido.nombre}</p><br>
        <p class="justify-content-start p-2 resp" ><strong>Dirección de envío:&nbsp;</strong> </p>
        <p class="justify-content-start p-2 resp" >${pedido.direccion}</p><br>

        <p class="justify-content-start p-2 resp" ><strong>Método de pago:&nbsp;</strong></p>
        <p class="justify-content-start p-2 resp" >${pedido.metodoDePago}</p><br>

        <p class="justify-content-start p-2 resp" ><strong>Indicaciones:&nbsp;</strong></p>
        <p class="justify-content-start p-2 resp" >${pedido.indicaciones}</p><br>     
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
          <p class="justify-content-start p-2 resp" ><strong>Subtotal:&nbsp;</strong> </p>
            <p class="justify-content-start p-2 resp" > $${pedido.subtotal}</p><br>
            <p class="justify-content-start p-2 resp" ><strong>Envió:&nbsp;</strong> </p>
            <p class="justify-content-start p-2 resp" > $${pedido.envio}</p><br>
            <p class="justify-content-start p-2 resp" ><strong>IVA(6%):&nbsp;</strong> </p>
            <p class="justify-content-start p-2 resp" > $${pedido.iva}</p><br>
            <p class="justify-content-start p-2 resp" ><strong>TOTAL: </p>
            <p class="justify-content-start p-2 resp" > $${pedido.total}</strong></p><br>
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

