import {ControladorProductos} from "./controladorProductos.js";
const miControladorProductos = new ControladorProductos();

const imprimirDOMindexAdmin = (indexAdmin) => {
    const productosAdmin = indexAdmin.cargarProductosFromLocalStorage();
    console.log(productosAdmin);
  const productosGrid = productosAdmin.map((producto) => `  
  <tr>
    <td><a href="">Editar</a> / <a href="">Eliminar</a></td>
  <td>${producto.id}</td>
  <td>${producto.nombreProducto}</td>
  <td>${producto.marcaProducto}</td>
  <td class="d-none d-sm-table-cell"><img  src ="${producto.imagenProducto}"  height= "150px;" ></td>
  <td>${producto.descripcionProducto}</td>
  <td>${producto.categoriaProducto}</td>
  <td>${producto.fechaProducto}</td>
  <td>${producto.cantidadProduto}</td>
  <td>${producto.precioProducto}</td>
  <td>${producto.descuentoProducto}</td>
  </tr>        
  `);
  document.getElementById("contenedor-de-la-info-productos").innerHTML = productosGrid.join("");
}

imprimirDOMindexAdmin(miControladorProductos);