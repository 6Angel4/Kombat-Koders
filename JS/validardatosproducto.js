import {ControladorProductos} from "../JS/controladorProductos.js";

document.getElementById("formulario-nuevo-producto").addEventListener("submit", (event) => {
    //Limpiar alertas
    event.preventDefault();
    document.getElementById("error-nombre-producto").style.display="none";
    document.getElementById("error-marca").style.display="none";
    document.getElementById("error-descripcion").style.display="none";
    document.getElementById("error-productoPara").style.display="none";
    document.getElementById("error-tipoProducto").style.display="none";
    document.getElementById("error-contenidoProducto").style.display="none";
    document.getElementById("error-precio").style.display="none";
    document.getElementById("error-imagen-producto").style.display="none";
    document.getElementById("error-oferta").style.display="none";
    document.getElementById("producto-creado-exitosamente").style.display="none";

    
    //getE... permite acceder y manipular elementos HTML por el atributo id("formulario"),utiliza addEventListener para escuchar el evento "submit"
const producto = { 
    nombre : document.getElementById("nombreProducto").value, 
    descripcion : document.getElementById("descripcionProducto").value,
    contenido : document.getElementById("contenidoProducto").value,
    precio : document.getElementById("precioProducto").value,
    marca : document.getElementById("marcaProducto").value,
    imagen : document.getElementById("imagenProducto").value,
    esPara : document.getElementById("productoPara").value,
    tipo : document.getElementById("tipoProducto").value,
    oferta : document.getElementById("ofertaProducto").value
    }   

    if(datosVerificados(producto)){
        const miControladorProductos = new ControladorProductos();
        miControladorProductos.agregarProducto(
            producto.nombre,
            producto.marca,
            producto.descripcion,
            producto.esPara,
            producto.tipo,
            producto.contenido,
            producto.precio,
            producto.oferta,
            producto.imagen);
        document.getElementById("producto-creado-exitosamente").style.display="block";
        document.getElementById("nombreProducto").value = "";
        document.getElementById("descripcionProducto").value = "";
        document.getElementById("contenidoProducto").value = "";
        document.getElementById("precioProducto").value = "";
        document.getElementById("marcaProducto").value = "";
        document.getElementById("imagenProducto").value = "";
        document.getElementById("ofertaProducto").value = "";
        setTimeout(function() {
            document.getElementById("producto-creado-exitosamente").style.display = 'none';
          }, 2000);
    }

});

const datosVerificados = (producto) => {   
    let esValido = true;
    const contenidoRegex = /^[0-9]*\.[0-9]{2}$/;
    const precioRegex = /^[0-9]*\.[0-9]{2}$/;
    const ofertaRegex = /^[0-9,$]*$/;

    if (producto.nombre === "") {
        document.getElementById("error-nombre-producto").style.display="block";
        esValido = false;
    } else if (producto.marca === "") {
        document.getElementById("error-marca").style.display="block";
        esValido = false;
    } else if (producto.descripcion === "") {
        document.getElementById("error-descripcion").style.display="block";
        esValido = false;
    } else if (!(producto.esPara === "perro" || producto.esPara === "gato")) {
        document.getElementById("error-productoPara").style.display="block";
        esValido = false;
    } else if (!(producto.tipo === "juguete" || producto.tipo === "comida" || producto.tipo === "accesorios")) {
        document.getElementById("error-tipoProducto").style.display="block";
        esValido = false;
    } else if (!contenidoRegex.test(producto.contenido)) {
        document.getElementById("error-contenidoProducto").style.display="block";
        esValido = false;
    } else if (!precioRegex.test(producto.precio)) {
        document.getElementById("error-precio").style.display="block";
        esValido = false;
    }  else if (producto.imagen === "") {
        document.getElementById("error-imagen-producto").style.display="block";
        esValido = false;
    }  else if (!ofertaRegex.test(producto.oferta) || !(producto.oferta<=95) || !(producto.oferta >=0)) {
        document.getElementById("error-oferta").style.display="block";
        esValido = false;
    }

    return esValido;
}