document.getElementById("formulario").addEventListener("submit", (event) => {

    //getE... permite acceder y manipular elementos HTML por el atributo id("formulario"),utiliza addEventListener para escuchar el evento "submit"
const producto = { 
    nombre : document.getElementById("nombreProducto").value, 
    contenido : document.getElementById("contenidoProducto").value,
    precio : document.getElementById("precio").value,
    marca : document.getElementById("marca").value,
    imagen : document.getElementById("imagen").value,
    esPara : document.getElementById("productoPara").value,
    tipo : document.getElementById("tipoProducto").value
    }   

    if(!datosVerificados(producto)) event.preventDefault(); // Prevenir el envío por defecto del formulario después de la validación

});

const datosVerificados = (producto) => {
    let esValido = true;
    const contenidoRegex = /^[0-9]*\.[0-9]{2}$/;
    const precioRegex = /^[0-9]*\.[0-9]{2}$/;

    if (!contenidoRegex.test(producto.contenido)) {
        alert("El contenido debe seguir el formato xx.xx");
        esValido = false;
    } else if (!precioRegex.test(producto.precio)) {
        alert("El precio debe tener formato xxxxx.xx");
        esValido = false;
    } else if (!(producto.esPara === "perro" || producto.esPara === "gato")) {
        alert("Sólo vendemos productos para perritos y gatitos");
        esValido = false;
    } else if (!(producto.tipo === "juguete" || producto.tipo === "comida" || producto.tipo === "accesorios")) {
        alert("Sólo vendemos productos como jueguetes, comida y accesorios");
        esValido = false;
    } else if (producto.nombre === "") {
        alert("Por favor ingresa un nombre valido");
        esValido = false;
    } else if (producto.marca === "") {
        alert("Por favor ingresa una marca valida");
        esValido = false;
    } else if (producto.imagen === "") {
        alert("Por favor ingresa una imagen valida");
        esValido = false;
    }

    return esValido;
}    //Lista de validaciones

    //precio -> Debe ser un número con decimales al menos 2 decimales | no letras, solo numeros y el signo de punto

//Id -> Garantizar que no hay repetición https://es.stackoverflow.com/questions/390700/eliminar-un-objeto-de-una-lista-mediante-su-atributo-id
//a través de de la clase de control 

//nombre -> Se vale de todo menos empty
//contenido -> Debe ser un número con decimales al menos 2 decimales | no letras, solo numeros y el signo de punto


    //Marca -> se vale de todo?

    //imagen -> debe ser un link a una imagen https://es.stackoverflow.com/questions/203106/saber-si-una-imagen-existe-o-no-se-cargo-correctamente
    //https://www.techiedelight.com/es/check-for-existence-of-image-at-given-url-javascript/

    //esPara -> tiene que ser perro o gato, no otra cosa, se puede hacer una lista en el html
    //Realizar un producto.esPara !== "perro" || "gato"


    //tipo -> pertenece a las 3 categorias que vendemos, no otra cosa, se puede limitar desde html con una lista?
    //Realizar tipo !== "juguete" || "comida" || "accesorios"