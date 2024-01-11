export class ControladorCarrito {
    // Set up the items and currentId property in the contructor
    constructor() {
      this.productos = [];
    }
  
    // Función agregar productos
    agregarProducto(id, name, price, quantity) {
        this.productos = this.cargarProductosFromLocalStorage();
      const producto = {
        id: id,
        nombreProducto: name,
        precioProducto: Number(price),
        cantidadProducto: quantity,
      };
      if(this.productos.find(productoFLS => productoFLS.id === producto.id)){
        const indexProductoExistente = this.productos.findIndex(productoFLS => productoFLS.id === producto.id);
        this.productos[indexProductoExistente].cantidadProducto++;
      } else{
        this.productos.push(producto);
      }
      this.pushProductosLocalStorage();
    }
  
    pushProductosLocalStorage() {
      localStorage.setItem("bolsa", JSON.stringify(this.productos));
    }

    actualizarCantidadProducto(id,cantidad){
      this.productos = this.cargarProductosFromLocalStorage();
      const index = this.productos.findIndex(producto => producto.id === id);
      this.productos[index].cantidadProducto = cantidad;
      this.pushProductosLocalStorage();
    }
  
    // Función para borrar un producto por su índice
    borrarProducto(id) {
      this.productos = this.cargarProductosFromLocalStorage();
      const index = this.productos.findIndex(producto => producto.id === id)
      this.productos.splice(index, 1);
      this.pushProductosLocalStorage();
    }
      
    cargarProductosFromLocalStorage() {
      const storageProductos = localStorage.getItem("bolsa")// cambiar esta variable por todosProductos que es el json
      if (storageProductos) {
        return JSON.parse(storageProductos);
      } else {
        return [];
      }
    }

    contadorCarrito(){
        this.productos = this.cargarProductosFromLocalStorage();
        let numeroProductos = 0;
        if(this.productos){
            for (let i = 0; i < this.productos.length; i++) {
                numeroProductos = numeroProductos + this.productos[i].cantidadProducto;
            }
        }
        return numeroProductos;
    }

  };