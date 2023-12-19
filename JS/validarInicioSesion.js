import { ControladorRegistro } from "./controladorRegistro.js";

document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) => {

    event.preventDefault();
    document.getElementById("inicio-sesion-exitoso").style.display="none";    
    document.getElementById("completa-campos").style.display="none";
    document.getElementById("no-registrado").style.display="none";
    document.getElementById("error-login-email").style.display="none";
    document.getElementById("error-login-password").style.display="none";

    
    // Obtener los valores de email y contraseña
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
 


    // Expresiones regulares
    let esValido = true; 
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    // Validar campos vacíos
    if (email.trim() === "" || password.trim() === "") {
    document.getElementById("completa-campos").style.display="block";   
    esValido = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("error-login-email").style.display="block";
      esValido = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById("error-login-password").style.display="block";
        esValido = false;
    }  
    const usuarioActual = {
      username: email,
      password: password
    }; 
  
    // Controlador
    const miControladorRegistro = new ControladorRegistro();
    // Verificar datos de usuario
    const usuarioRegistrado = miControladorRegistro.buscarRegistroLocalStorage(usuarioActual.username, usuarioActual.password);
  
    if (usuarioRegistrado) {
      document.getElementById("inicio-sesion-exitoso").style.display = "block";
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
  } else {
      // Ocultar mensajes previos
      document.getElementById("no-registrado").style.display = "block";
      document.getElementById("error-login-password").style.display = "none";
      document.getElementById("completa-campos").style.display = "none";
  
      // Mostrar mensajes específicos
      if (email.trim() === "") {
          // El campo de correo está incompleto
          document.getElementById("completa-campos").style.display = "block";
      } else if (!emailRegex.test(email)) {
          // El campo de correo no es válido
          document.getElementById("error-login-email").style.display = "block";
      } else if (!miControladorRegistro.existeUsuarioLocalStorage(usuarioActual.username)) {
          // El usuario no está registrado
          document.getElementById("no-registrado").style.display = "block";
      } else {
          // Contraseña incorrecta
          document.getElementById("error-login-password").style.display = "block";
      }
  }


});






   

















































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
