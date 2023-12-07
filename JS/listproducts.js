

function borrarTodosElementos() {
   //llamar funcion que reformatee el html sin productos para vender
   
   localStorage.setItem("producto", []);
   //localStorage.clear();// afecta todos los datos
}

borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 


// function borrarTodosElementos(productos) {
//    productos =[];

// }

// borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 
