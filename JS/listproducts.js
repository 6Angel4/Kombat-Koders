let listaProductosQueSeVaAMostrarEnLaPagina = [];

function cargaPagina() {// ejemplo
    /*
    imaginemos que aqui hicimos todo el proceso para cargar la pagina
    cargar los html/css/js, hacer los gets, etc
    */
   const datosDeProductosQueLLegaronDelBackend = [
    {
       nombre:"obj 1" ,
       datos: "otros datos"
    },
    {
        nombre:"obj 2" ,
        datos: "otros datos"
     },
     {
        nombre:"obj 3" ,
        datos: "otros datos"
     },
     {
        nombre:"obj 4" ,
        datos: "otros datos"
     }
   ]
    listaProductosQueSeVaAMostrarEnLaPagina = datosDeProductosQueLLegaronDelBackend;
}

function borrarTodosElementos() {//llamar funcion que reformatee el html sin productos para vender
    
    listaProductosQueSeVaAMostrarEnLaPagina = [];
}

cargaPagina()
console.log("quedan "+listaProductosQueSeVaAMostrarEnLaPagina.length, " productos totales");//quedan 4 elementos
borrarTodosElementos();//funcion que eliminara todos los elementos, 
console.log("quedan "+listaProductosQueSeVaAMostrarEnLaPagina.length, " productos totales");//quenda 0 elementos