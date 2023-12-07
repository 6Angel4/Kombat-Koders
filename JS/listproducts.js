

function borrarTodosElementos() {
   //llamar funcion que reformatee el html sin productos para vender
   
   localStorage.removeItem("producto", []);
   //localStorage.clear();// afecta todos los datos
}

borrarTodosElementos();//llamada a funcion que eliminara todos los elementos, 
