const formBusqueda = document.getElementById('formBusqueda');
const inputBusqueda = document.getElementById('customSearch');
const resultadoBusqueda = document.getElementById('boxSearch');

formBusqueda.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = inputBusqueda.value.trim();

    if (searchTerm) {
        // Hacer una solicitud al servidor para buscar el término
        fetch(`/productos.json?nombreProducto=${searchTerm}`)
            .then(productos => {
                if (!productos.ok) {
                    throw new Error('Error en la solicitud al servidor');
                }
                return productos.json();
            })
            .then(data => {
                // Procesar y mostrar los resultados de la búsqueda
                mostrarResultados(data);
            })
            .catch(error => {
                console.error('Error al buscar productos:', error);
            });
    } else {
        // Manejar el caso en el que no haya un término de búsqueda
        console.error('El término de búsqueda está vacío');
    }
});



function mostrarResultados(resultados) {
    // Mostrar los resultados de la búsqueda 
    resultadoBusqueda.innerHTML = ''; // Limpiar resultados anteriores

    // Iterar sobre los resultados y mostrarlos en el DOM
    resultados.forEach(productos => {
        const elementoProducto = document.createElement('div');
        elementoProducto.textContent = productos.nombre; // Aquí debes mostrar los datos que desees
        resultadoBusqueda.appendChild(elementoProducto);
    });
}