import {ControladorProductos} from "../JS/controladorProductos.js";

document.getElementById("formulario-nuevo-producto").addEventListener("submit", (event) => {
    //Limpiar alertas
    event.preventDefault();
    console.log("Holis");
    document.getElementById("error-nombre-producto").style.display="none";
    document.getElementById("error-marca").style.display="none";
    document.getElementById("error-descripcion").style.display="none";
    document.getElementById("error-productoPara").style.display="none";
    document.getElementById("error-tipoProducto").style.display="none";
    document.getElementById("error-contenidoProducto").style.display="none";
    document.getElementById("error-precio").style.display="none";
    document.getElementById("error-imagen-producto").style.display="none";
    document.getElementById("error-oferta").style.display="none";

    
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
        const miControladorProductos = new ControladorProductos(0);
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

    } else{
        console.log("No valido");
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
}    //Lista de validaciones

    //precio -> Debe ser un número con decimales al menos 2 decimales | no letras, solo numeros y el signo de punto

//Id -> Garantizar que no hay repetición https://es.stackoverflow.com/questions/390700/eliminar-un-objeto-de-una-lista-mediante-su-atributo-id
//a través de de la clase de control 

//nombre -> Se vale de todo menos empty
//contenido -> Debe ser un número con decimales al menos 2 decimales | no letras, solo numeros y el signo de punto


    //Marca -> se vale de todo?

    //imagen -> debe ser un link a una imagen https://es.stackoverflow.com/questions/203106/saber-si-una-imagen-existe-o-no-se-cargo-correctamente
    //https://www.techiedelight.com/es/check-for-existence-of-image-at-given-url-javascript/

    //esPara -> tiene que ser perro o gato, no otra cosa, se puede hacer una lista en el html
    //Realizar un producto.esPara !== "perro" || "gato"


    //tipo -> pertenece a las 3 categorias que vendemos, no otra cosa, se puede limitar desde html con una lista?
    //Realizar tipo !== "juguete" || "comida" || "accesorios"