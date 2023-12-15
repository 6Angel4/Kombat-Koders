
//Instanciar controlador de usuarios
//obtener los datos del usuario logeado
//Mostrando los valores
document.getElementById("nombre").value = "ernesto";
document.getElementById("direccion").value = "lol";
document.getElementById("telefono").value = "lol";
document.getElementById("ciudad").value = "lol";
document.getElementById("cp").value = "lol";
document.getElementById("email").value = "lol";

//Presionar editar en form datos personales
document.getElementById("form-datos-personales").addEventListener("submit", (event) => {
    //Limpiar alertas
    event.preventDefault();
    //Reinicio de estilo de error
    document.getElementById("error-nombre-producto").style.display="none";

const infoUsuario = { 
    nombre : document.getElementById("nombre").value, 
    direccion : document.getElementById("direccion").value,
    telefono : document.getElementById("telefono").value,
    ciudad : document.getElementById("ciudad").value,
    cp : document.getElementById("cp").value,
    email : document.getElementById("email").value
    }   

    if(datosVerificados(infoUsuario)){
        //Escribir datos del user de nuevo
        //Insertar nuevos datos
        document.getElementById("nombre").value = infoUsuario.nombre;
        document.getElementById("direccion").value = infoUsuario.direccion;
        document.getElementById("telefono").value = infoUsuario.telefono;
        document.getElementById("ciudad").value = infoUsuario.ciudad;
        document.getElementById("cp").value = infoUsuario.cp;
        document.getElementById("email").value = infoUsuario.email;
    }
});

const datosVerificados = (infoUsuario) => {
    let esValido = true;
    const contenidoRegex = /^[0-9]*\.[0-9]{2}$/;
    const precioRegex = /^[0-9]*\.[0-9]{2}$/;
    const ofertaRegex = /^[0-9,$]*$/;

    if (infoUsuario.nombre === "") {
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