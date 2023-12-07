//Eliminar producto
deleteItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
        this.items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(this.items));
    }
}
//Refresca los productos
loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("items");
    if (storageItems) {
        this.items = JSON.parse(storageItems);
    }
}
//eliminar desde un boton
deleteButton.addEventListener('click', () => {
    itemsController.deleteItem(productId);
});
