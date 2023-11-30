document.getElementById("formulario").addEventListener("submit", (event) => {
  //getE... permite acceder y manipular elementos HTML por el atributo id("formulario"),utiliza addEventListener para escuchar el evento "submit"
  event.preventDefault(); // Prevenir el envío por defecto del formulario
  const email = document.getElementById("correo").value; //obtiene el valor de un campo de HTML con el id "correo, se accede al elemento mediante document.getElementById('correo'), y luego se extrae su valor con .value
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  if (validaEmail(email)) {
    //condicional para mensajes, y evita que salgan las dos alertas seguidas, aunque el email este incorrecto
    alert("¡Mensaje enviado con éxito!"); //alert bloquea funciones, dejar al ultimo
  } else {
    alert("Por favor, ingrese un correo electrónico válido");
  }
  validaTelefono(telefono);
  validaMensaje(mensaje);
});

const validaEmail = (email) => {
  //funcion de validacion de email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //expresiones regulares son patrones de búsqueda y manipulación de cadenas de texto, magia negra, no tocar*
  if (emailRegex.test(email)) {
    //test es un metodo que se usa en expresiones regulares(regex) para comprobar si una cadena es igual al regex
    return true; //test devuelve true si hay una coincidencia y false si no hay coincidencia
  } else {
    return false;
  }
};

const validaTelefono = (telefono) => {
  // Eliminar espacios y guiones
  /**
   * Hacer uso de replace, para reemplazar los - (globales) por nada
   */
  const telefonoSinEspacios = telefono.replace(/[ -]/g, "");
  // Definir una expresión regular para validar el formato del teléfono
  const formatoValido = /^(55)?(\d{2})(\d{2})(\d{2})(\d{2})$/;
  // Comprobar si el número cumple con el formato y tiene 10 dígitos
  if (
    formatoValido.test(telefonoSinEspacios) &&
    telefonoSinEspacios.length === 10
  ) {
    return true;
  } else {
    alert("Ingresa un número de teléfono válido con 10 dígitos");
    return false;
  }
};

const validaMensaje = (mensaje) => {
  if (mensaje === "") {
    alert("Por favor escribe tu mensaje.");
    return false;
  } else if (mensaje.length < 3) {
    alert(
      "Tu mensaje es muy corto, para una buena comunicación te pedimos que nos cuentes con más detalles tu situación."
    );
    return false;
  }
};

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

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevenir el envío por defecto del formulario

//     // Obtener los valores de los campos
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const message = document.getElementById('message').value;

//     // Validaciones básicas
//     if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
//         alert('Por favor, complete todos los campos obligatorios.');
//         return;
//     }

//     // Validar el formato del correo electrónico
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (!emailRegex.test(email)) {
//     alert('Por favor, ingrese un correo electrónico válido.');
//     return;
// }

// // simulación
// console.log('Datos enviados (simulación):');
// console.log('Nombre:', name);
// console.log('Correo electrónico:', email);
// console.log('Teléfono:', phone);
// console.log('Mensaje:', message);

// alert('¡Mensaje enviado con éxito!');
// });

//  Obtener los valores de phone
