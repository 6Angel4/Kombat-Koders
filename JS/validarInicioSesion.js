
// Validar datos Inicio de sesión
// id="error-email"
// id="error-password"


// Validar datos recuperar contraseña
// id="error-email"

// Validar datos registro
// id="error-nombre"
// id="error-email"
// id="error-password"
// id="error-password2"
// id="error-terms-conditions"


// Validar Inicio de Sesión
document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) =>  {
event.preventDefault();

    document.getElementById("error-email").style.display="none";
    document.getElementById("error-password").style.display="none";

    const inicioSesion = {
        usuario : document.getElementById("email").value,
        contrasenia : document.getElementById("password").value, 
        
    }
    if(!validarInicioSesion(inicioSesion));
});

const validarInicioSesion = (inicioSesion) => {
    let esValido = true;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(inicioSesion.usuario || email === "")){
        document.getElementById("error-email").style.display="block";
        esValido = false;
    } else if (!passwordRegex.test(inicioSesion.contrasenia)){
        document.getElementById("error-password").style.display="block";
        esValido = false;
    } 
    return esValido;
}



// Validar Recuperar Contraseña
document.getElementById("formulario-recuperar-contraseña").addEventListener("submit", (event) =>  {
    event.preventDefault();

    document.getElementById("error-recovery-email").style.display="none";

    const recuperarContrasenia = {
        recuContrasenia :  document.getElementById("recoveryEmail").value
    }
    if(!validarRecuperarContrasenia(recuperarContrasenia));
});

const validarRecuperarContrasenia = (recuperarContrasenia) => {
    let esValido = true;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(recuperarContrasenia.recuContrasenia || email === "")){
        document.getElementById("error-recovery-email").style.display="block";
        esValido = false;
        return esValido;
    }
}


// Validar Formulario Registro

