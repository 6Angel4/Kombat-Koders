// ================================ Validar Formulario Registro =========================================
import { ControladorRegistro } from "./controladorRegistro.js";

document.getElementById("formulario-registro").addEventListener("submit", (event) =>  {
console.log("Hola Mundo");
// Limpiar alertas
event.preventDefault();
document.getElementById("error-nombre").style.display="none";
document.getElementById("error-telefono").style.display="none";
document.getElementById("error-email").style.display="none";
document.getElementById("error-password").style.display="none";
document.getElementById("error-password2").style.display="none";
document.getElementById("error-termsConditions").style.display="none";

// Obtener valores del formmulario
const registro = {
    nombre :  document.getElementById("registerName").value,
    telefono: document.getElementById("registerPhoneNumber").value,
    email: document.getElementById("registerEmail").value,         
    registroPassword : document.getElementById("registerPassword").value,
    contrasena : document.getElementById("registerPassword2").value,
    terminos : document.getElementById("acceptTerms").checked 
          
}
console.log(registro.terminos);

// Verificar datos antes de enviar
    if(validarRegistro(registro)){
        const miControladorRegistro = new ControladorRegistro();
        miControladorRegistro.agregarRegistro(
            registro.nombre,
            registro.telefono,
            registro.email,
            registro.contrasena);

// Limpiar los campos del formmulario       
        document.getElementById("registro-completado-exitosamente").style.display="block";
        document.getElementById("registerName").value = "";
        document.getElementById("registerPhoneNumber").value = "";
        document.getElementById("registerEmail").value = "";         
        document.getElementById("registerPassword").value = "";
        document.getElementById("registerPassword2").value="";
        document.getElementById("acceptTerms").checkbox.checked = false;

        setTimeout(function() {
            document.getElementById("registro-completado-exitosamente").style.display = 'none';
          }, 2000);
    }

});

// Validar datos del formulario
    const validarRegistro = (registro) => {
        let esValido = true;
        const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const telefonoRegex = /^[0-9]+$/;
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
        if (!nombreRegex.test(registro.nombre.trim()) || registro.nombre.trim().length === 0) {
        document.getElementById("error-nombre").style.display="block"; 
        esValido = false;
        } else if (!telefonoRegex.test(registro.telefono) || !(registro.telefono.length === 10)) {
        document.getElementById("error-telefono").style.display="block"; 
        esValido = false;          
        } else if (!emailRegex.test(registro.email)) {
        document.getElementById("error-email").style.display="block";
        esValido = false;
        } else if (!passwordRegex.test(registro.registroPassword)){
        document.getElementById("error-password").style.display="block";
        esValido = false;
        } else if (registro.registroPassword !== registro.contrasena){
        document.getElementById("error-password2").style.display="block";
        esValido = false;
        } else if (!registro.terminos) {
        document.getElementById("error-termsConditions").style.display="block";    
        esValido = false;
    }
    return esValido;

    
};

// Contrasena123
 


// crear variable de usuarios con un array y convertir en JSON
// Lanzar mensaje de registro exitoso  
