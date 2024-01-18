// ================================ Validar Formulario Registro =========================================
// import { ControladorRegistro } from "./controladorRegistro.js";

document.getElementById("formulario-registro").addEventListener("submit", (event) =>  {

// Limpiar alertas
event.preventDefault();
document.getElementById("error-nombre").style.display="none";
document.getElementById("error-telefono").style.display="none";
document.getElementById("error-email").style.display="none";
document.getElementById("error-password").style.display="none";
document.getElementById("error-password2").style.display="none";
document.getElementById("error-direccion").style.display="none";
document.getElementById("error-ciudad").style.display="none";
document.getElementById("error-cp").style.display="none";
document.getElementById("error-nacimiento").style.display="none";
document.getElementById("error-termsConditions").style.display="none";

// Obtener valores del formmulario
const registro = {
    nombre :  document.getElementById("registerName").value,
    direccion : document.getElementById("registerDirection").value,
    telefono: document.getElementById("registerPhoneNumber").value,
    email: document.getElementById("registerEmail").value,         
    nacimiento: document.getElementById("registerFechaNacimiento").value,
    ciudad : document.getElementById("registerCity").value,
    cp: document.getElementById("registerCP").value,
    contrasena : document.getElementById("registerPassword2").value,
    registroPassword : document.getElementById("registerPassword").value,
    terminos : document.getElementById("acceptTerms").checked     
}

// Verificar datos del formulario son validos antes de enviar
    if(validarRegistro(registro)){
        // const miControladorRegistro = new ControladorRegistro();
        registrarUsuario(registro);
        // miControladorRegistro.agregarRegistro(
        //     registro.nombre,
        //     registro.telefono,
        //     registro.email,
        //     registro.contrasena,
        //     registro.direccion,
        //     registro.ciudad,
        //     registro.cp,
        //     registro.nacimiento);

// Limpiar los campos del formulario       
        document.getElementById("registro-completado-exitosamente").style.display="block";
        document.getElementById("registerName").value = "";
        document.getElementById("registerPhoneNumber").value = "";
        document.getElementById("registerEmail").value = "";         
        document.getElementById("registerPassword").value = "";
        document.getElementById("registerPassword2").value="";
        document.getElementById("registerDirection").value="";
        document.getElementById("registerCity").value="";
        document.getElementById("registerCP").value="";
        document.getElementById("registerFechaNacimiento").value="";
        document.getElementById("acceptTerms").checked = false;

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
        const nacimiento = new Date(registro.nacimiento);
        const hoy = new Date();
        const edadDias = Math.round((hoy.getTime()-nacimiento.getTime())/(1000*60*60*24));
        
        if (!nombreRegex.test(registro.nombre) || registro.nombre.trim().length === 0) {
            document.getElementById("error-nombre").style.display="block"; 
            esValido = false;
        } else if (!emailRegex.test(registro.email)) {
            document.getElementById("error-email").style.display="block";
            esValido = false;
        } else if (!telefonoRegex.test(registro.telefono) || !(registro.telefono.length === 10)) {
            document.getElementById("error-telefono").style.display="block"; 
            esValido = false;          
        } else if (!passwordRegex.test(registro.registroPassword)){
            document.getElementById("error-password").style.display="block";
            esValido = false;
        } else if (registro.registroPassword !== registro.contrasena){
            document.getElementById("error-password2").style.display="block";
            esValido = false;
        } else if (registro.direccion === ""){
            document.getElementById("error-direccion").style.display="block";
            esValido = false;
        } else if (registro.ciudad === ""){
            document.getElementById("error-ciudad").style.display="block";
            esValido = false;
        } else if (registro.cp === "" || !telefonoRegex.test(registro.cp)){
            document.getElementById("error-cp").style.display="block";
            esValido = false;
        } else if (edadDias < 6570 || isNaN(edadDias)) {
            document.getElementById("error-nacimiento").style.display="block";    
            esValido = false;
        } else if (!registro.terminos) {
            document.getElementById("error-termsConditions").style.display="block";    
            esValido = false;
        }
    return esValido;    
};


     const registrarUsuario = (usuario) => {
        const postUser = 
        {
            nombre: usuario.nombre,
            direccion: usuario.direccion,
            telefono: usuario.telefono,
            email: usuario.email,
            birthdate: usuario.nacimiento,
            ciudad: usuario.ciudad,
            cp: usuario.cp,
            contraseña: usuario.contrasena,
            active: true,
            rol: {
                id: 2,
                nombre: "usuario",
                descripcion: "cliente"
                }
     }

     fetch('http://localhost:8080/api/v1/usuarios', {
        method: 'POST', // or 'PUT'
        headers: {
         'Content-Type': 'application/json',
        },
         body: JSON.stringify(postUser),
         })
         .then(response => response.json())
         .then(data => {
         console.log('Success:', data);
         })
         .catch((error) => {
         console.error('Error:', error);
         });    
 }


   