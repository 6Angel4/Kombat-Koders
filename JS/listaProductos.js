import {ControladorProductos} from "../JS/controladorProductos.js";
import {ControladorCarrito} from "../JS/controladorCarrito.js";

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
            <a href="#" data-productoID="${producto.id}" class="btn btn-primary botonAnadirProducto">Añadir a carrito</a>
            </div>
        </div>
      </div>`;
  });

  document.getElementById("productos-contenedor").innerHTML = productosGrid.join("");

  const addButtons = Array.from(document.getElementsByClassName("botonAnadirProducto"))
  addButtons.forEach((item) =>{
    item.addEventListener('click', (evento) => {
      const productoID = evento.currentTarget.getAttribute("data-productoID")
      const contadorBolsa = document.getElementById('contador-carrito')
      contador++;//Esto se reemplazara por el length elemento del local storage del carrito/bolsa
      contadorBolsa.innerText = contador;
      console.log("Producto añadido a la bolsa con ID:", productoID);
      const miControladorCarrito = new ControladorCarrito();
      const productoCarrito = Controlador.cargarProductosFromLocalStorage().find(producto => producto.id == productoID);
      console.log(productoCarrito);
      miControladorCarrito.agregarProducto(
        productoCarrito.id,
        productoCarrito.nombreProducto,
        productoCarrito.precioProducto,
        1);
      
    });
  })
};

const miControladorProductos = new ControladorProductos();
const miControladorCarrito = new ControladorCarrito();
let contador = miControladorCarrito.contadorCarrito();
document.getElementById('contador-carrito').innerText = contador;
imprimirDOMFromLocalStorage(miControladorProductos);
miControladorProductos.inicializarFiltros();
 