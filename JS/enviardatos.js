// Validar el formato del correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
}

// simulación
console.log('Datos enviados (simulación):');
console.log('Nombre:', name);
console.log('Correo electrónico:', email);
console.log('Teléfono:', phone);
console.log('Mensaje:', message);


alert('¡Mensaje enviado con éxito!');
});