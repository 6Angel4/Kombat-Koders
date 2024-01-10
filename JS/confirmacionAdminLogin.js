//  === Referencias === //
const email = document.getElementById("loginEmail");
const contraseña = document.getElementById("loginPassword");
const loginBoton = document.getElementById("login");
const emailAdmin = "alejandro.flores@gmail.com";
const contraseñaAdmin = "Admin123"; // Contraseña solo de prueba

// Zona de Pruebas
console.log(email.value);

// Zona de Pruebas

document.addEventListener("DOMContentLoaded", function () {
  loginBoton.addEventListener("click", function () {
    if (email.value === emailAdmin && contraseña.value === contraseñaAdmin) {
      window.location.href = "../HTML/indexAdmin.html"; // si es admin
    } else {
      window.location.href = "../index.html"; // si no es admin (en caso de que exista el usuario)
    }
  });
});
