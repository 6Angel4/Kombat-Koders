// Create a ItemsController class
export class ControladorProductos {
  // Set up the items and currentId property in the contructor
  constructor() {
      this.productos = [];
  }

  // Función agregar productos
  agregarProducto(name, brand, description, animal, category, quantity, price, discount, image) {
    let idUltimoProducto;
    this.productos=this.cargarProductosFromLocalStorage();
    if(this.productos.length === 0){
      idUltimoProducto=-1;
    } else{
      idUltimoProducto=this.productos[this.productos.length-1].id;
    }
    const producto = {
      id: idUltimoProducto+1,
      nombreProducto: name,
      marcaProducto: brand,
      descripcionProducto: description,
      imagenProducto: image,
      animalProducto: animal,
      categoriaProducto: category,
      cantidadProducto: quantity,
      precioProducto: Number(price),
      descuentoProducto: discount,          
      fechaProducto: new Date().getTime()
    };
      this.productos.push(producto);
      this.pushProductosLocalStorage();
  }   
   
  pushProductosLocalStorage(){
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }

// Función para borrar un producto por su índice
  borrarProducto(id) {
  this.productos=this.cargarProductosFromLocalStorage();
  this.productos.splice(id, 1);
  this.pushProductosLocalStorage();
  }

 // Función para modificar un producto
 modificarProducto(id, nuevoNombreProducto,  nuevoDescripcionProducto, nuevoMarcaProducto, nuevoAnimalProducto, nuevoCategoriaProducto, nuevoCantidadProducto, nuevoPrecioProducto, nuevoDescuentoProducto, nuevoImagenProducto){
  this.productos=this.cargarProductosFromLocalStorage();
  const index = this.productos.findIndex((producto) => producto.id == id);
  console.log("Indice encontrado: ",index);
  if (index !== -1) {
    console.log("objeto encontrado: " + JSON.stringify(this.productos[index]));
    this.productos[index].nombreProducto = nuevoNombreProducto; // sobreescribir
    this.productos[index].descripcionProducto = nuevoDescripcionProducto;
    this.productos[index].marcaProducto = nuevoMarcaProducto;
    this.productos[index].animalProducto = nuevoAnimalProducto;
    this.productos[index].categoriaProducto = nuevoCategoriaProducto;
    this.productos[index].cantidadProducto = nuevoCantidadProducto;
    this.productos[index].precioProducto= nuevoPrecioProducto;
    this.productos[index].descuentoProducto = nuevoDescuentoProducto;
    this.productos[index].imagenProducto = nuevoImagenProducto;
    this.productos[index].fechaProducto = new Date().getTime();  
    this.pushProductosLocalStorage();
  } else {
    console.log(`No se encontró la publicación con el ID: ${id}`);
  }
}

// Función para borrar todos los productos
  borrarTodosProductos() {
  this.productos=this.cargarProductosFromLocalStorage();
  this.productos.splice(0,this.productos.length);
  this.pushProductosLocalStorage();
 }  

 cargarProductosFromLocalStorage() {
  const storageProductos = localStorage.getItem("productos")
  if (storageProductos) {
    return JSON.parse(storageProductos);
   } else{
    return [];
   }
}
};
