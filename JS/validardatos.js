const datosVerificados = (usuario) => {
    let esValido = true;
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const telefonoRegex = /^[0-9]+$/;
    const telefonoSinSeparacion = usuario.telefono.replace(/[ +-.,()]/g, "");

    if (usuario.nombre.trim().length === 0) {
        alert("Ingresa tu nombre, por favor.");
        esValido = false;
    } else if (!nombreRegex.test(usuario.nombre)) {
        alert("Ingresa sólo letras, por favor.");
        esValido = false;
    } else if (!emailRegex.test(usuario.email)) {
        alert("Ingresa un correo electrónico con formato valido.");
        esValido = false;
    } else if (!(telefonoSinSeparacion.length === 10) || !(telefonoRegex.test(telefonoSinSeparacion))) {
        alert("Ingresa un número valido, por favor.");
        esValido = false;
    } else if (usuario.mensaje === "") {
        alert("Escribe tu mensaje, por favor.");
        esValido = false; 
    }  else if (mensaje.length < 3) {
        alert("Tu mensaje es muy corto, para una buena comunicación te pedimos que nos cuentes con más detalles tu situación.");
        esValido = false;
    }
    return esValido;
}

document.getElementById("formulario").addEventListener("submit", (event) => {

    //getE... permite acceder y manipular elementos HTML por el atributo id("formulario"),utiliza addEventListener para escuchar el evento "submit"
const usuario = { 
    nombre : document.getElementById('nombre').value,
    email : document.getElementById("correo").value, //obtiene el valor de un campo de HTML con el id "correo, se accede al elemento mediante document.getElementById('correo'), y luego se extrae su valor con .value
    telefono : document.getElementById("telefono").value,
    mensaje : document.getElementById("mensaje").value
    }   

    if(!datosVerificados(usuario)) event.preventDefault(); // Prevenir el envío por defecto del formulario

});

///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// /^               Coincide con el inicio de la cadena
// \w+              Coincide con uno o más caracteres de palabra (letras A-Z,a-z, dígitos 0-9 o guiones bajos _)
// (                Grupo de captura para el nombre de dominio
// [\.-]?           Coincide con cero o un punto . o guion medio -
// \w+              Coincide con uno o más caracteres de palabra
// )*               El grupo anterior puede repetirse cero o más veces
// @                Coincide con el símbolo "@"
// \w+              Coincide con uno o más caracteres de palabra (donde va nombre de dominio)
// (                Grupo de captura para el subdominio
// [\.-]?           Coincide con cero o un punto . o guion medio -
// \w+              Coincide con uno o más caracteres de palabra
// )*               El grupo anterior puede repetirse cero o más veces
// (                Grupo de captura para el dominio de nivel superior (TLD)
// \.               Coincide con un punto
// \w{2,3}          Coincide con 2 o 3 caracteres de palabra (por ejemplo, com, org, net)
// )+               El grupo anterior debe aparecer una o más veces
// $                Coincide con el final de la cadena


