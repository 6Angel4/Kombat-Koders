import {ControladorProductos} from "../JS/controladorProductos.js";

const imprimirDOMFromLocalStorage = (Controlador)=>{
    const productosLS=Controlador.cargarProductosFromLocalStorage();
    const productosGrid = productosLS.map((producto) => `  
      <div class="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3">
        <div class="card border-0 mb-5"><!--Aqui esta la primera tarjeta de producto-->
          <img src="${producto.imagenProducto}" class="card-img-top" alt="..." />
            <div class="card-body text-center d-flex align-items-center justify-content-between flex-column">
              <div>
                <h5 class="card-title">${producto.nombreProducto}</h5>
                <p class="card-text">${producto.descripcionProducto}</p>
                <p>$${producto.precioProducto.toFixed(2)}</p>
              </div>
              <a href="#" id="botonAnadirProducto" class="btn btn-primary">Añadir a carrito</a>
          </div>
        </div> 
      </div>         
    `);
    document.getElementById("productos-contenedor").innerHTML = productosGrid.join("");
  }

const miControladorProductos = new ControladorProductos();
imprimirDOMFromLocalStorage(miControladorProductos);