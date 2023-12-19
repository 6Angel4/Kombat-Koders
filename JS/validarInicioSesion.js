import { ControladorRegistro } from "./controladorRegistro.js";

document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) => {

  event.preventDefault();
  document.getElementById("inicio-sesion-exitoso").style.display = "none";
  document.getElementById("completa-campos").style.display = "none";
  document.getElementById("no-registrado").style.display = "none";
  document.getElementById("error-login-email").style.display = "none";
  document.getElementById("error-login-password").style.display = "none";

  // Obtener los valores de email y contraseña
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const usuarioActual = {
    username: email,
    password: password
  }
  
  // Verificar datos de usuario
  if (verificacarInicioSesion(usuarioActual)) {
    const miControladorRegistro = new ControladorRegistro();
    const usuarioRegistrado = miControladorRegistro.buscarRegistroLocalStorage(usuarioActual.username, usuarioActual.password);
  
  if (usuarioRegistrado) {
      document.getElementById("inicio-sesion-exitoso").style.display = "block";
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
      document.getElementById("loginEmail").value = "";
      document.getElementById("loginPassword").value ="";
    } else {      
      document.getElementById("no-registrado").style.display = "block";
  }  
}
});

// Validaciones
const verificacarInicioSesion = (usuario) => {
  // Expresiones regulares
  let esValido = true;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validar campos vacíos
  if (usuario.username.trim() === "" && usuario.password.trim() === "") {
    document.getElementById("completa-campos").style.display = "block";
    esValido = false;
  } else if (!emailRegex.test(usuario.username)) {
    document.getElementById("error-login-email").style.display = "block";
    esValido = false;
  } else if (!passwordRegex.test(usuario.password)) {
    document.getElementById("error-login-password").style.display = "block";
    esValido = false;
  }
  return esValido;
}



































// import { ControladorRegistro } from "./controladorRegistro.js";

// document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) =>  {

// // Limpiar alertas
// event.preventDefault();
// document.getElementById("error-email").style.display="none";
// document.getElementById("error-password").style.display="none";

// // Obtener valores del formmulario
// const inicioSesion = {
//     email: document.getElementById("loginEmail").value,
//     password : document.getElementById("loginPassword").value
// }

// // Verificar datos del formulario son validos antes de enviar
// if(validarInicoSesion(inicioSesion)){
//     const miControladorRegistro = new ControladorRegistro();
//     miControladorRegistro.agregarInicioSesion(
//         inicioSesion.email,
//         inicioSesion.contrasena);

// // Limpiar los campos del formmulario
//     document.getElementById("loginEmail").value = "";
//     document.getElementById("loginPassword").value = "";

//     setTimeout(function() {
//         document.getElementById("inicio-sesion-exitoso").style.display = 'none';
//       }, 2000);
// }
// });

// // Validar datos del formulario expresiones regulares
// const validarInicoSesion = (inicioSesion) => {
//     let esValido = true;
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//     if (!emailRegex.test(inicioSesion.email)) {
//         document.getElementById("error-login-email").style.display="block";
//         esValido = false;
//         } else if (!passwordRegex.test(inicioSesion.password)){
//         document.getElementById("error-login-password").style.display="block";
//         esValido = false;
//         }
//         return esValido;
// };  
