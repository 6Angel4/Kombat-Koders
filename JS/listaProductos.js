import {ControladorProductos} from "../JS/controladorProductos.js";

const imprimirDOMFromLocalStorage = (Controlador) => {
  const productosLS = Controlador.cargarProductosFromLocalStorage();
  const productosGrid = productosLS.map((producto) => {
    // Verificar si el producto tiene descuento
    const tieneDescuento = producto.descuentoProducto > 0;

    // Calcular el precio con descuento si es aplicable
    const precioConDescuento = tieneDescuento
      ? producto.precioProducto - (producto.precioProducto * producto.descuentoProducto) / 100
      : null;

    return `
      <div class="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3">
        <div class="card border-0 mb-5">
          <img src="${producto.imagenProducto}" class="card-img-top" alt="..." />
          <div class="card-body text-center d-flex align-items-center justify-content-between flex-column">
            <div>
              <h5 class="card-title">${producto.marcaProducto}<br>${producto.nombreProducto}</h5>
              <p class="card-text">${producto.descripcionProducto}</p>
              
              ${tieneDescuento
                ? `<p class="descuento">Descuento: ${producto.descuentoProducto}%</p>`
                : ''}

              <p class="precio">
                ${tieneDescuento
                  ? `<span class="precio-original"><strike>$${producto.precioProducto.toFixed(2)}</strike></span> 
                    <br>
                     <span class="precio-descuento">$${precioConDescuento.toFixed(2)}</span>`
                  : `$${producto.precioProducto.toFixed(2)}`}
              </p>
            </div>
            <a href="#" id="botonAnadirProducto" onclick="agregarAlCarrito()" class="btn btn-primary">Añadir a carrito</a>
          </div>
        </div>
      </div>`;
  });

  document.getElementById("productos-contenedor").innerHTML = productosGrid.join("");
};

const miControladorProductos = new ControladorProductos();
imprimirDOMFromLocalStorage(miControladorProductos);
miControladorProductos.inicializarFiltros();