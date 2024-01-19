// import { ControladorRegistro } from "./controladorRegistro.js";

document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) => {

  // LLimpiar alertas
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
   // const miControladorRegistro = new ControladorRegistro();
  //const usuarioRegistrado = miControladorRegistro.buscarRegistroLocalStorage(usuarioActual.username, usuarioActual.password);
  console.log(usuarioActual);  
  loginUsuario(usuarioActual);  
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

const loginUsuario  = async (usuario) => {
  const postUser =         
    {   
      contraseña: usuario.password
    }  

const url =  "http://localhost:8080/api/v1/usuarios/query?email=" + usuario.username;
   try {
    const response = await fetch( url ,{
        method: "POST",
        body: JSON.stringify(postUser),
        headers: { 
            "Content-Type":"application/json"
        }
    });

    console.log(response);
    const data = await response.json();   
    localStorage.setItem("loginUsuario", JSON.stringify(data));
  
    
} catch (error) {
    console.error( error );
    alert("Error en el login");
}   
  const usuarioLogeado = JSON.parse(localStorage.getItem ("loginUsuario"));
  console.log(usuarioLogeado.status)
  if (usuarioLogeado.status === undefined) {
    document.getElementById("inicio-sesion-exitoso").style.display = "block";
    if (usuarioLogeado.rol.id === 1 ) {
      window.location.href = "../HTML/aniadirProducto.html"; // si es admin
    } else {
      window.location.href = "../index.html"; // si no es admin (en caso de que exista el usuario)
    }
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value ="";
 } else {      
   document.getElementById("no-registrado").style.display = "block";
}  
}











