
//Instanciar controlador de usuarios
//obtener los datos del usuario logeado
//Mostrando los valores
document.getElementById("nombre").value = "ernesto";
document.getElementById("direccion").value = "lol";
document.getElementById("telefono").value = "lol";
document.getElementById("ciudad").value = "lol";
document.getElementById("cp").value = "lol";
document.getElementById("email").value = "lol@gmail.com";

//Presionar editar en form datos personales
document.getElementById("form-datos-personales").addEventListener("submit", (event) => {
    event.preventDefault();
    //Limpiar alertas
    //Reinicio de estilo de error
    document.getElementById("datos-usuario-editados-exitoso").style.display="none";
    document.getElementById("error-nombre").style.display="none";
    document.getElementById("error-direccion").style.display="none";
    document.getElementById("error-telefono").style.display="none";
    document.getElementById("error-ciudad").style.display="none";
    document.getElementById("error-cp").style.display="none";
    document.getElementById("error-email").style.display="none";


const infoUsuario = { 
    nombre : document.getElementById("nombre").value, 
    direccion : document.getElementById("direccion").value,
    telefono : document.getElementById("telefono").value,
    ciudad : document.getElementById("ciudad").value,
    cp : document.getElementById("cp").value,
    email : document.getElementById("email").value
    }   

    if(datosVerificadosinfoUsuario(infoUsuario)){
        //Escribir datos del user de nuevo
        //Insertar nuevos datos
        document.getElementById("datos-usuario-editados-exitoso").style.display="block";
        document.getElementById("nombre").value = infoUsuario.nombre;
        document.getElementById("direccion").value = infoUsuario.direccion;
        document.getElementById("telefono").value = infoUsuario.telefono;
        document.getElementById("ciudad").value = infoUsuario.ciudad;
        document.getElementById("cp").value = infoUsuario.cp;
        document.getElementById("email").value = infoUsuario.email;
        setTimeout(function() {
            document.getElementById("datos-usuario-editados-exitoso").style.display = 'none';
          }, 2000);
    }
});

const datosVerificadosinfoUsuario = (infoUsuario) => {
    let esValido = true;
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const telefonoRegex = /^[0-9]+$/;
    const telefonoSinSeparacion = infoUsuario.telefono.replace(/[ +-.,()]/g, "");
    const cpRegex= /^[0-9]{4,}$/;

    if ((infoUsuario.nombre === "") && !(nombreRegex.test(infoUsuario.nombre))) {
        document.getElementById("error-nombre").style.display="block";
        esValido = false;
    } else if (infoUsuario.direccion === "") {
        document.getElementById("error-direccion").style.display="block";
        esValido = false;
    } else if (!(telefonoSinSeparacion.length === 10) || !(telefonoRegex.test(telefonoSinSeparacion))) {
        document.getElementById("error-telefono").style.display="block";
        esValido = false;
    } else if (infoUsuario.ciudad === "") {
        document.getElementById("error-ciudad").style.display="block";
        esValido = false;
    } else if (!cpRegex.test(infoUsuario.cp)) {
        document.getElementById("error-cp").style.display="block";
        esValido = false;
    } else if (!emailRegex.test(infoUsuario.email)) {
        document.getElementById("error-email").style.display="block";
        esValido = false;
    } 
    return esValido;
}


////////////////////////////////////////////////////////////////////////////////////////
///////////Formulario metodos pago//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//Mostrando los valores
document.getElementById("nombreTitular").value = "ernesto";
document.getElementById("numeroTarjeta").value = "XXXX-XXXX-XXXX-X"+"999";
document.getElementById("fechaExpiracion").value = "09-26";
//Presionar editar en form datos personales
document.getElementById("form-datos-tarjeta").addEventListener("submit", (event) => {
    event.preventDefault();
    //Limpiar alertas
    //Reinicio de estilo de error
    document.getElementById("datos-tarjeta-editados-exitoso").style.display="none";
    document.getElementById("error-nombreTitular").style.display="none";
    document.getElementById("error-numeroTarjeta").style.display="none";
    document.getElementById("error-fechaExpiracion").style.display="none";
    document.getElementById("error-cvv").style.display="none";

const metodoPago = { 
    nombreTitular : document.getElementById("nombreTitular").value, 
    numeroTarjeta: document.getElementById("numeroTarjeta").value.replace(/[ +-.,()]/g, ""),
    fechaExpiracion: document.getElementById("fechaExpiracion").value,
    cvv : document.getElementById("cvv").value
    }   

    if(datosVerificadosMetodoPago(metodoPago)){
        //Escribir datos del user de nuevo
        //Insertar nuevos datos
        document.getElementById("datos-tarjeta-editados-exitoso").style.display="block";
        document.getElementById("nombreTitular").value = metodoPago.nombreTitular;
        document.getElementById("numeroTarjeta").value = "XXXX-XXXX-XXXX-X"+metodoPago.numeroTarjeta.substring(13, 16);
        document.getElementById("fechaExpiracion").value = metodoPago.fechaExpiracion;
        document.getElementById("cvv").value = "";
        setTimeout(function() {
            document.getElementById("datos-tarjeta-editados-exitoso").style.display = 'none';
          }, 2000);
    }
});

const datosVerificadosMetodoPago = (metodoPago) => {
    let esValido = true;
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;;
    const tarjetaRegex = /^[0-9]{16}$/;
    const fechaExpSinSeparacion = metodoPago.fechaExpiracion.replace(/[ +-.,()]/g, "");
    const fechaExpRegex = /^[0-9]{4}$/;
    const cvvRegex= /^[0-9]{3}$/;

    if ((metodoPago.nombreTitular === "") && !(nombreRegex.test(metodoPago.nombreTitular))) {
        document.getElementById("error-nombreTitular").style.display="block";
        esValido = false;
    } else if (!(metodoPago.numeroTarjeta.length === 16) || !(tarjetaRegex.test(metodoPago.numeroTarjeta))) {
        document.getElementById("error-numeroTarjeta").style.display="block";
        esValido = false;
    } else if (!(fechaExpSinSeparacion.length === 4) || !(fechaExpRegex.test(fechaExpSinSeparacion))) {
        document.getElementById("error-fechaExpiracion").style.display="block";
        esValido = false;
    } else if (!cvvRegex.test(metodoPago.cvv)) {
        document.getElementById("error-cvv").style.display="block";
        esValido = false;
    }
    return esValido;
}