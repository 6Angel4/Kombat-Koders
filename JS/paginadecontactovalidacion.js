document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validaciones básicas
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }