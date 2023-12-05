
// Función que recibe los datos que provienen del formulario en HTML
function guardarProducto () {

    const id = document.getElementById("id").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const contenidoProducto = document.getElementById("contenidoProducto").value;
    const precio = document.getElementById("Precio").value;
    const marca = document.getElementById("marca").value;
    const tipoProducto = document.getElementById("tipoProducto").value;
    
    const producto = {
        id: id,
        nombreProducto: nombreProducto,
        contenidoProducto: contenidoProducto,
        precio: precio,
        marca: marca,
        productoPara: productoPara,
        tipoProducto: tipoProducto
    };

    //const productoJSON = JSON.stringify(producto);
    console.log("Producto(JSON):");
};



