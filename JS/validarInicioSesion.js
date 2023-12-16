// =================================  Validar Inicio de Sesión ===========================================
document.getElementById("formulario-inicio-sesion").addEventListener("submit", (event) =>  {

// Limpiar alertas    
    event.preventDefault();
    document.getElementById("error-email").style.display="none";
    document.getElementById("error-password").style.display="none";

    const inicioSesion = {
         emailUsuario : document.getElementById("email").value,
         contrasena : document.getElementById("password").value, 
        
    }
    if(validarInicioSesion(inicioSesion)){
        document.getElementById("error-email").style.display="block";
        else if {
        document.getElementById("").style.display="block";
        } else if {
            document.getElementById("").style.display="block";
        } else if{

        }
    }
});

const validarInicioSesion = (inicioSesion) => {
    let esValido = true;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    if (!emailRegex.test(inicioSesion.emailUsuario || inicioSesion.emailUsuario === "")){
       
        esValido = false;
    } else if (!passwordRegex.test(inicioSesion.contrasena)){
        
        esValido = false;
    } 
    return esValido;
};
