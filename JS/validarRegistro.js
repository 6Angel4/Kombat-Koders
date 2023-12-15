// ================================ Validar Formulario Registro =========================================

document.getElementById("formulario-registro").addEventListener("submit", (event) =>  {
    event.preventDefault();

    document.getElementById("error-nombre").style.display="none";
    document.getElementById("error-email").style.display="none";
    document.getElementById("error-password").style.display="none";
    document.getElementById("error-password2").style.display="none";
    document.getElementById("error-termsConditions").style.display="none";

    const registro = {
        registroNombre :  document.getElementById("registerName").value,
        registroEmail : document.getElementById("registerEmail").value,
        registroPassword : document.getElementById("resgisterPassword").value,
        registroRepetirPassword : document.getElementById("registerPassword2").value,
        registroEmail : document.getElementById("accepTerms").checked       
    }
    if(!validarRegistro(registro));    
});

const validarRegistro = (registro) => {
    let esValido = true;

    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if (!nombreRegex.test(registro.registroNombre.trim().length  === 0)){
        document.getElementById("error-nombre").style.display="block";
    } else if (!emailRegex.test(registro.registroEmail)){
        document.getElementById("error-email").style.display="block";
    } else if (!passwordRegex.test(registro.registroPassword)){
        document.getElementById("error-password").style.display="block";
    } else if (!passwordRegex.test(registro.registroRepetirPassword === registroPassword )){
        document.getElementById("error-password-email").style.display="block";
    } else if (!registro.termsConditions ) {
    document.getElementById("error-termsConditions").style.display="block";
    esValido = false;    
    return esValido; 
 }
};

// crear variable de usuarios con un array y convertir en JSON
// Lanzar mensaje de registro exitoso  


