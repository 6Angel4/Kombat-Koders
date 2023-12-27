// Create a ItemsController class
export class ControladorProductos {
  // Set up the items and currentId property in the contructor
  constructor() {
    this.productos = [];
  }

  // Función agregar productos
  agregarProducto(name, brand, description, animal, category, quantity, price, discount, image) {
    let idUltimoProducto;
    this.productos = this.cargarProductosFromLocalStorage();
    if (this.productos.length === 0) {
      idUltimoProducto = -1;
    } else {
      idUltimoProducto = this.productos[this.productos.length - 1].id;
    }
    const producto = {
      id: idUltimoProducto + 1,
      nombreProducto: name,
      marcaProducto: brand,
      descripcionProducto: description,
      imagenProducto: image,
      animalProducto: animal,
      categoriaProducto: category,
      cantidadProducto: quantity,
      precioProducto: Number(price),
      descuentoProducto: discount,
      fechaProducto: new Date().getTime()
    };
    this.productos.push(producto);
    this.pushProductosLocalStorage();
  }

  pushProductosLocalStorage() {
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }

  // Función para borrar un producto por su índice
  borrarProducto(id) {
    this.productos = this.cargarProductosFromLocalStorage();
    this.productos.splice(id, 1);
    this.pushProductosLocalStorage();
  }

  // Función para modificar un producto
  modificarProducto(id, nuevoNombreProducto, nuevoDescripcionProducto, nuevoMarcaProducto, nuevoAnimalProducto, nuevoCategoriaProducto, nuevoCantidadProducto, nuevoPrecioProducto, nuevoDescuentoProducto, nuevoImagenProducto) {
    this.productos = this.cargarProductosFromLocalStorage();
    const index = this.productos.findIndex((producto) => producto.id == id);
    console.log("Indice encontrado: ", index);
    if (index !== -1) {
      console.log("objeto encontrado: " + JSON.stringify(this.productos[index]));
      this.productos[index].nombreProducto = nuevoNombreProducto; // sobreescribir
      this.productos[index].descripcionProducto = nuevoDescripcionProducto;
      this.productos[index].marcaProducto = nuevoMarcaProducto;
      this.productos[index].animalProducto = nuevoAnimalProducto;
      this.productos[index].categoriaProducto = nuevoCategoriaProducto;
      this.productos[index].cantidadProducto = nuevoCantidadProducto;
      this.productos[index].precioProducto = nuevoPrecioProducto;
      this.productos[index].descuentoProducto = nuevoDescuentoProducto;
      this.productos[index].imagenProducto = nuevoImagenProducto;
      this.productos[index].fechaProducto = new Date().getTime();
      this.pushProductosLocalStorage();
    } else {
      console.log(`No se encontró la publicación con el ID: ${id}`);
    }
  }

  // Función para borrar todos los productos
  borrarTodosProductos() {
    this.productos = this.cargarProductosFromLocalStorage();
    this.productos.splice(0, this.productos.length);
    this.pushProductosLocalStorage();
  }

  cargarProductosFromLocalStorage() {
    const storageProductos = localStorage.getItem("productos")// cambiar esta variable por todosProductos que es el json
    if (storageProductos) {
      return JSON.parse(storageProductos);
    } else {
      return [];
    }
  }

  inicializarFiltros() {
    // checkboxes por grupo filtrado(precio, descuento, marca)
    const checkBoxesPrecio = document.getElementsByClassName("checkboxFiltroPrecio");
    const checkBoxesDescuento = document.getElementsByClassName("checkboxFiltroDescuento");
    const checkBoxesMarcas = document.getElementsByClassName("checkboxFiltroMarcas");

    const categoriaGatoAlimento = document.getElementById("gato-alimento");
    const categoriaGatoJueguete = document.getElementById("gato-juguete");
    const categoriaGatoAccesorio = document.getElementById("gato-accesorio");

    const categoriaPerroAlimento = document.getElementById("perro-alimento");
    const categoriaPerroJuguete = document.getElementById("perro-juguete");
    const categoriaPerroAccesorio = document.getElementById("perro-accesorio");

    const jsonAModificar = this.cargarProductosFromLocalStorage();

    for (var i = 0; i < checkBoxesPrecio.length; i++) {

      checkBoxesPrecio[i].addEventListener("change", function () {
        //quitar seleccion de otras checkboxes de precio
        quitarSeleccion(checkBoxesPrecio, this);
        this.productos = filtradoPorCheckboxes(jsonAModificar)
        imprimirDOMFiltros(this.productos)

      });

    }
    for (var i = 0; i < checkBoxesDescuento.length; i++) {
      checkBoxesDescuento[i].addEventListener("change", function () {
        //quitar seleccion de otras checkboxes de descuento
        quitarSeleccion(checkBoxesDescuento, this);
        this.productos = filtradoPorCheckboxes(jsonAModificar)
        imprimirDOMFiltros(this.productos)
      });

    }
    for (var i = 0; i < checkBoxesMarcas.length; i++) {
      checkBoxesMarcas[i].addEventListener("change", function () {
        quitarSeleccion(checkBoxesMarcas, this);
        this.productos = filtradoPorCheckboxes(jsonAModificar)
        imprimirDOMFiltros(this.productos)
      });

    }

//maneja el evento de clic en la categoría "gato" y el tipo de producto "alimento"
//Al hacer clic, se filtran los productos correspondientes y se actualiza la interfaz de usuario con los resultados
    categoriaGatoAlimento.addEventListener("click", function () {
      console.log("Antes de filtrado:", jsonAModificar);
      this.productos = filtradoPorCategoria(jsonAModificar, "gato", "alimento");
      console.log("Después de filtrado:", this.productos);
      imprimirDOMFiltros(this.productos);
    });


     categoriaGatoJueguete.addEventListener("click", function () {
      this.productos = filtradoPorCategoria(jsonAModificar, "gato","juguete");
      imprimirDOMFiltros(this.productos)
     });

     categoriaGatoAccesorio.addEventListener("click", function () {
      this.productos = filtradoPorCategoria(jsonAModificar, "gato","accesorio");
      imprimirDOMFiltros(this.productos)
     });

     categoriaPerroAlimento.addEventListener("click", function () {
      this.productos = filtradoPorCategoria(jsonAModificar,"perro","alimento");
      imprimirDOMFiltros(this.productos)
     });

     categoriaPerroJuguete.addEventListener("click", function () {
      this.productos = filtradoPorCategoria(jsonAModificar,"perro","juguete");
      imprimirDOMFiltros(this.productos)
     });

     categoriaPerroAccesorio.addEventListener("click", function () {
      this.productos = filtradoPorCategoria(jsonAModificar,"perro","accesorio");
      imprimirDOMFiltros(this.productos)
     });



  }
};

function quitarSeleccion(checkBoxes, checkboxSeleccionado) { //quita seleccion de otros checkboxes del mismo grupo
  for (var i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i] !== checkboxSeleccionado) {
      checkBoxes[i].checked = false;
    }
  }
}

//buscar que grupo de checkboxes aplicar
// checar cual checkbox esta checado de precio y aplicar filtro necesario al json
function filtradoPorCheckboxes(jsonDeLocalStorage) {
  let jsonModificado = jsonDeLocalStorage;
  const checkBoxesPrecio = document.getElementsByClassName("checkboxFiltroPrecio");
  const checkBoxesDescuento = document.getElementsByClassName("checkboxFiltroDescuento");
  const checkBoxesMarcas = document.getElementsByClassName("checkboxFiltroMarcas");

  console.log("aqui hago filtrado");

  //============================filtro precio==================
  for (var i = 0; i < checkBoxesPrecio.length; i++) {
    if (checkBoxesPrecio[i].checked == true) {
      console.log(checkBoxesPrecio[i].value)
      switch (checkBoxesPrecio[i].value) {
       
        case "150 a 500": {
          jsonModificado = jsonModificado.filter((producto) => producto.precioProducto > 150 && producto.precioProducto < 500);
          break;
        }
        case "500 a 1000": {
          jsonModificado = jsonModificado.filter((producto) => producto.precioProducto > 500 && producto.precioProducto < 1000);
          break;
        }
        case "1000 o mas": {
          jsonModificado = jsonModificado.filter((producto) => producto.precioProducto > 1000);
          break;
        }
      }
    }
  }

  //=================================================filtro descuento==================================
  for (var i = 0; i < checkBoxesDescuento.length; i++) {
    if (checkBoxesDescuento[i].checked == true) {
      console.log(checkBoxesDescuento[i].value)

      switch (checkBoxesDescuento[i].value) {
        case "10 o mas": {
          jsonModificado = jsonModificado.filter((producto) => producto.descuentoProducto >= 10 && producto.descuentoProducto < 20);
          break;
        }
        case "20 o mas": {
          jsonModificado = jsonModificado.filter((producto) => producto.descuentoProducto >= 20 && producto.descuentoProducto < 30);
          break;
        }
        case "30 o mas": {
          jsonModificado = jsonModificado.filter((producto) => producto.descuentoProducto >= 30);
          break;
        }
      }
    }
  }

  //=========================================================filtro marca============================================
  for (var i = 0; i < checkBoxesMarcas.length; i++) {
    if (checkBoxesMarcas[i].checked == true) {
      console.log(checkBoxesMarcas[i].value)

      switch (checkBoxesMarcas[i].value) {
        case "Whole Hearted": {
          jsonModificado = jsonModificado.filter((producto) => producto.marcaProducto == 'Whole Hearted');
          break;
        }
        case "Royal Cannin": {
          jsonModificado = jsonModificado.filter((producto) => producto.marcaProducto == 'Royal Cannin');
          break;
        }
        case "Canidae": {
          jsonModificado = jsonModificado.filter((producto) => producto.marcaProducto == 'Canidae');
          break;
        }
        case "Merrick": {
          jsonModificado = jsonModificado.filter((producto) => producto.marcaProducto == 'Merrick');
          break;
        }
      }
    }
  }

  console.log(JSON.stringify(jsonModificado, undefined, 4));

  console.log("Después del filtrado:", jsonModificado);
  return jsonModificado;
}


//esta función filtra un JSON de productos según la categoría de animal y el tipo de producto especificados.
//Solo los productos que cumplen con ambas condiciones se incluirán en el resultado final.
function filtradoPorCategoria(jsonDeLocalStorage, animalCategoria, tipoProducto) {
  let jsonModificado = jsonDeLocalStorage;
 // ===============filtrado gato y perro===========================
 jsonModificado = jsonModificado.filter((producto) => {
  const esGato = producto.animalProducto.toLowerCase() === "gato";
  const esPerro = producto.animalProducto.toLowerCase() === "perro";
  const esCategoriaCorrecta = producto.categoriaProducto.toLowerCase() === tipoProducto.toLowerCase();
  
  // Condiciones de filtrado combinadas
  return (esGato && animalCategoria.toLowerCase() === "gato" && esCategoriaCorrecta) ||
         (esPerro && animalCategoria.toLowerCase() === "perro" && esCategoriaCorrecta);
});


  console.log(JSON.stringify(jsonModificado, undefined, 4));

  console.log("Después del filtrado:", jsonModificado);
  return jsonModificado;
}
//=======================================
// Contador de carrito
let contador = 0;

// Función para agregar al carrito y actualizar el contador
function agregarAlCarrito(idProducto) {
  contador++;
  document.getElementById('contador-carrito').innerText = contador;
  console.log("Producto añadido al carrito con ID:", idProducto);
}
//=======================================================================================================

const imprimirDOMFiltros = (productosFiltrados) => {
  const productosGrid = productosFiltrados.map((producto) => {
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
            <a href="#" id="botonAnadirProducto_${producto.id}" onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Añadir a carrito</a>
          </div>
        </div>
      </div>`;
  });
  document.getElementById("productos-contenedor").innerHTML = productosGrid.join("");

  console.log("Imprimiendo DOM con productos:", productosFiltrados);


}

