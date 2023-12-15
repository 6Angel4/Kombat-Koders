// ================================= Validar Recuperar Contraseña ========================================
 document.getElementById("formulario-recuperar-contrasena").addEventListener("submit", (event) =>  {
     
// Limpiar eventos    
    event.preventDefault()
    document.getElementById("error-recovery-email").style.display="none";

     const recuperarContrasena = {
         recuContrasena :  document.getElementById("recoveryEmail").value,
     }
     if(!validarRecuperarContrasena(recuperarContrasena)){ //
        document.getElementById("error-recovery-email").style.display="block";
     } else {
        document.getElementById("recovery-email-success").style.display="block";
     }
 });

 const validarRecuperarContrasena = (recuperarContrasena) => {
    let esValido = true;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(recuperarContrasena.recuContrasena) || (recuperarContrasena === "")){
        esValido = false;       
    }
    return esValido;
 };


 