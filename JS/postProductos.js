console.log("JS-POST-Productos");

// Ref al formulario de aniadirProducto.html
const postProducto = document.forms["formProductos"];

postProducto.addEventListener("submit", (event) => {
  // Evita el comportamiento predeterminado asociado a un evento.
  event.preventDefault();
  console.log(event);

  const producto = {
    nombreProducto: postProducto.elements["nombreProducto"].value,
    marcaProducto: postProducto.elements["marcaProducto"].value,
    descripcionProducto: postProducto.elements["descripcionProducto"].value,
    productoPara: postProducto.elements["productoPara"].value,
    tipoProdcuto: postProducto.elements["tipoProducto"].value,
    contenidoProducto: postProducto.elements["contenidoProducto"].value,
    precioProducto: postProducto.elements["precioProducto"].value,
    ofertaProducto: postProducto.elements["ofertaProducto"].value,
    existenciaProducto: postProducto.elements["existenciaProducto"].value,
    imagenProducto: postProducto.elements["imagenProducto"].value,
  };

  if (datosVerificados(producto)) {
    enviarDatosAlServidor(producto);
  }
});

const datosVerificados = (producto) => {
  let response = true;

  if (producto.nombreProducto === "") {
    mensajeError("Falta introducir el nombre del producto");
    response = false;
  } else if (producto.marcaProducto === "") {
    mensajeError("Falta introducir la marca del producto");
    response = false;
  } else if (producto.descripcionProducto === "") {
    mensajeError("Falta introducir la descripcion del producto");
    response = false;
  } else if (producto.productoPara === "") {
    mensajeError("Falta especificar para quién va dirigido el producto");
    response = false;
  } else if (producto.tipoProdcuto === "") {
    mensajeError("Falta introducir qué tipo de producto es");
    response = false;
  } else if (producto.contenidoProducto === "") {
    mensajeError("Falta introducir el contenido neto del producto");
    response = false;
  } else if (producto.precioProducto === "") {
    mensajeError("Falta introducir el precio del producto");
    response = false;
  } else if (producto.ofertaProducto === "") {
    mensajeError("Falta introducir la oferta del producto (puede ser 0)");
    response = false;
  } else if (producto.existenciaProducto === "") {
    mensajeError("Falta introducir el stock del producto");
    response = false;
  } else if (producto.imagenProducto === "") {
    mensajeError("Falta introducir una imagen del producto");
    response = false;
  } else {
    mensajeError("");
  }

  return response;
};


const mensajeError = (message) => {
  console.log(message);
  const errorMessage = document.getElementById("error-message");
  const errorMessageContainer = document.getElementById("error-message-container");

  errorMessage.innerHTML = message;
    if (message === "") {
        // displaty: none: quita el elemento del DOM
        // visibility: hidden : ocultar visualmente el elemento
        errorMessageContainer.style.display = "none";
    } else {
        errorMessageContainer.style.display = "block";
    }
}

const enviarDatosAlServidor = async (producto) => {
  const productoPost = {
    nombre: producto.nombreProducto,
    descripcion: producto.descripcionProducto,
    contenido: producto.contenidoProducto,
    precio: producto.precioProducto,
    descuento: producto.ofertaProducto,
    existencia: producto.existenciaProducto,
    imagen: producto.imagenProducto,
    marca: producto.marcaProducto,
    tipoProducto: {
      id: producto.idTipoProducto,
      tipoProducto: producto.tipoProducto,
    },
    categoria: {
      id: producto.idCategoriaProducto,
      nombre: producto.categoriaProducto,
    },
  };

  console.table(productoPost);

  //const url = "http://petsupermarket.onrender.com/api/v1/productos"
  const url = "http://localhost:8080/api/v1/productos";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(productoPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const newProducto = await response.json();
    console.log(newProducto);
    alert("Registro exitoso");
  } catch (error) {
    console.error(error);
    alert("Error en el registro");
  }
};