document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) => {
    // Evitar que se envíe el formulario automáticamente
    event.preventDefault();
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
    }
  
    // Validar formato de email
    else if (!emailRegex.test(email)) {
      document.getElementById("error-login-email").style.display="block";
      esValido = false;
    }
  
    // Validar formato de contraseña
    else if (!passwordRegex.test(password)) {
        document.getElementById("error-login-password").style.display="block";
        esValido = false;
    }
  
    // Datos de usuario de prueba (puedes cambiar estos valores)
    const usuarioPrueba = {
      username: "usuarioprueba@test.com",
      password: "contrasena123",
    };
  
    // Verificar datos de usuario
     if (email === usuarioPrueba.username && password === usuarioPrueba.password) {
        document.getElementById("inicio-sesion-exitoso").style.display="block";
      // Almacenar datos del usuario en el local storage
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioPrueba));
      // Redirigir a otra página aquí si lo deseas
    } else {
        document.getElementById("no-registrado").style.display="block";
    }
  });
  
  // Autenticación al cargar la página (verificar si hay un usuario almacenado en el local storage)
  document.addEventListener("DOMContentLoaded", () => {
    const usuarioAlmacenado = localStorage.getItem("usuarioActual");
  
    if (usuarioAlmacenado) {
      const usuarioActual = JSON.parse(usuarioAlmacenado);
      console.log("Usuario autenticado:", usuarioActual.username);
      // Puedes redirigir a otra página aquí si lo deseas
    } else {
      console.log("No hay usuario autenticado");
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
