
var listaProductosQueSeVaAMostrarEnLaPagina = [];
function cargaPagina() {
    /*
    imaginemos que aqui hicimos todo el proceso para cargar la pagina
    cargar los html/css/js, hacer los gets, etc
    */
   const datosDeProductosQueLLegaronDelBackend = [// ejemplo
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
function borrarTodaLista() {
    //llamar funcion que reformatee el html sin productos para vender
    listaProductosQueSeVaAMostrarEnLaPagina = []
}

cargaPagina()
console.log("quedan "+listaProductosQueSeVaAMostrarEnLaPagina.length, " en el arreglo");
borrarTodaLista();
console.log("quedan "+listaProductosQueSeVaAMostrarEnLaPagina.length, " elementos en el arreglo");