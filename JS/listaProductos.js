import { ControladorProductos } from "../JS/controladorProductos.js";
import { ControladorCarrito } from "../JS/controladorCarrito.js";

const imprimirDOMFromAPI = async (Controlador) => {
const storedURL = localStorage.getItem('productosAPIURL');
  const url = "http://localhost:8080/api/v1/productos";

  try {
    const response = await fetch(url);
    const productosAPI = await response.json();
    localStorage.setItem('productosAPIURL', url);
    miControladorProductos.borrarTodosProductos()
    const productosGrid = productosAPI.map((producto) => {
     miControladorProductos.agregarProducto(producto.nombre, producto.marca, producto.descripcion, producto.categoria.nombre, producto.tipoProducto.tipoProducto, producto.cantidad, producto.precio, producto.descuento, producto.stock, producto.imagen);

      const tieneDescuento = producto.descuento > 0;
      const precioConDescuento = tieneDescuento
        ? producto.precio - (producto.precio * producto.descuento) / 100
        : null;

      return `
        <div class="d-flex justify-content-center col-sm-12 col-md-6 col-lg-3">
          <div class="card border-0 mb-5">
            <img src="${producto.imagen}" class="card-img-top" alt="..." />
            <div class="card-body text-center d-flex align-items-center justify-content-between flex-column">
              <div>
                <h5 class="card-title"><i>${producto.marca}</i><br><b>${producto.nombre}</b></h5>
                <p class="card-text">${producto.descripcion}</p>
                
                ${tieneDescuento
                  ? `<p class="descuento">Descuento: ${producto.descuento}%</p>`
                  : ''}
  
                <p class="precio">
                  ${tieneDescuento
                    ? `<span class="precio-original"><strike>$${producto.precio.toFixed(2)}</strike></span> 
                      <br>
                       <span class="precio-descuento">$${precioConDescuento.toFixed(2)}</span>`
                    : `$${producto.precio.toFixed(2)}`}
                </p>
              </div>
              <a href="#" data-productoID="${producto.id}" class="btn btn-primary botonAnadirProducto">Añadir a carrito</a>
              </div>
          </div>
        </div>`;
    });

    document.getElementById("productos-contenedor").innerHTML = productosGrid.join("");
    miControladorProductos.inicializarFiltros();
    const addButtons = Array.from(document.getElementsByClassName("botonAnadirProducto"));
    addButtons.forEach((item) => {
      item.addEventListener('click', (evento) => {
        const productoID = evento.currentTarget.getAttribute("data-productoID");
        const contadorBolsa = document.getElementById('contador-carrito');
        contador++; // Esto se reemplazará por el length del elemento del local storage del carrito/bolsa
        contadorBolsa.innerText = contador;
        console.log("Producto añadido a la bolsa con ID:", productoID);
        const miControladorCarrito = new ControladorCarrito();
        const productoCarrito = productosAPI.find(producto => producto.id == productoID);
        miControladorCarrito.agregarProducto(
          productoCarrito.id,
          productoCarrito.nombre,
          productoCarrito.precio,
          1
        );
      });
    });

  } catch (error) {
    console.error("Error al obtener productos desde la API:", error);
  }
};

const miControladorProductos = new ControladorProductos();
const miControladorCarrito = new ControladorCarrito();
let contador = miControladorCarrito.contadorCarrito();
document.getElementById('contador-carrito').innerText = contador;
imprimirDOMFromAPI(miControladorProductos);

