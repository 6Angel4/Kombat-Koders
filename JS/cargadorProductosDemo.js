import {ControladorProductos} from "../JS/controladorProductos.js";
const miControladorProductos = new ControladorProductos();

const storageProductos = localStorage.getItem("productos")
// cada vez que hagamos cambios en los datos de cambio de producto , borrar local storage, para que se refleje el cambio
if (!storageProductos) {
    miControladorProductos.agregarProducto("Chicken & Pea Recipe", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "Whole Hearted", "Gato", "alimento", 100, 640.00, "0", 12, "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3275114-center-1");

    miControladorProductos.agregarProducto("Medium Adult", "Croquetas Medium Adult de Royal Cannin para perros adultos. Fórmula especial para razas medianas.", "Royal Cannin", "Gato", "accesorio", 200, 2648.50, "15", 12, "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e3dbe58a-e198-4e28-8900-1555c1ed14a9.49a40064f4cceb74b3a053399e30f301.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF");
    
    miControladorProductos.agregarProducto("Salmon & Pea Recipe", "Croquetas Salmon & Pea Recipe de Whole Hearted para perros. Con ingredientes de alta calidad.", "Whole Hearted", "Gato", "juguete", 50, 395.99, "20", 12, "https://www.petco.com.mx/medias/122518.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MzM0MzIzfGltYWdlL2pwZWd8aGNlL2gxZS8xMDIxMDg3Njk0ODUxMC8xMjI1MTguanBnXzEyMDBmdHd8MzA1MzM3ZDdlZDhlOGU0MTMzZTUwNDg1NWI2NTBjYjNhODIzZGQ4ODBlNTc3Zjk3MjQ4YzI2MTQ5MDQ3MWFkOQ",);
    
    miControladorProductos.agregarProducto("Chicken & Pea Recipe", "Croquetas Chicken & Pea Recipe de Whole Hearted para perros. Delicioso sabor a pollo y guisantes.", "Whole Hearted", "Perro", "alimento", 5, 308.00, "45", 12, "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3275114-center-1");
    
    miControladorProductos.agregarProducto("Real Bison", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "Canidae", "Perro", "alimento", 6, 720.00, "30", 12, "https://cdn11.bigcommerce.com/s-lnkn0tcvqc/images/stencil/960w/products/937/1158/2023_Pure_Bison_withGrain22lb_front-pack__94339.1680129900.jpg?c=1");
    
    miControladorProductos.agregarProducto("Pro Plan Adult Optihealt", "Croquetas Pro Plan Adult Optihealt de Purina para perros adultos. Fórmula balanceada para una salud óptima.", "Purina", "Perro", "alimento", 7, 800.00, "30", 12, "https://www.petco.com.mx/medias/104562.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDgwNDA1fGltYWdlL2pwZWd8aGMyL2hhMC8xMDIxMDU0NDg3NzU5OC8xMDQ1NjIuanBnXzEyMDBmdHd8ZDAzMjBlNTg1ZmZmMjVlNGRjYTA0MWM2MWNiMzlhN2RmZTBhNzdiMmU2MDFjNzdlZWNkMGRiNTdmNTZmODhkMA");
    
    miControladorProductos.agregarProducto("Chicken & Pea Recipe", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "Whole Hearted", "Perro", "alimento", 9, 355.00, "30",  12,"https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3wzMDU0MDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDA0L2hiZi85NDAzMjI5NjM0NTkwLmpwZ3wwOTI0YWY5YzFlYzY2YWFjY2U5Nzk1NjUwNGQ1NTY3M2U1ZTRjNzcwYzRlYjM0MmY2ZGE2YWQ0MzJmMGNhN2U1");
    
    miControladorProductos.agregarProducto( "Healthy Weight Recipe", "Croquetas Healthy Weight Recipe de Merrick para perros. Fórmula especial para mantener un peso saludable.","Merrick", "Perro", "alimento", 10, 680.00, "30", 12, "https://amorperruno.mx/wp-content/uploads/2020/06/descarga-6-300x300.jpg");
    
    miControladorProductos.agregarProducto("Real Salmon & Sweet Potato Recipe", "Croquetas Science Diet para perros adultos. Nutrición balanceada para una vida saludable.", "Canidae", "Perro", "juguete", 11, 720.00, "25", 12, "https://www.petco.com.mx/medias/123028.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjYxMTc1fGltYWdlL2pwZWd8aDI2L2gwYi8xMDM4MzY0MzgzNjQ0Ni8xMjMwMjguanBnXzEyMDBmdHd8OTJjMjQyODRiMTM2MzIzOGYwZGExMTM4ZDhlYTg5MTg5ZWNkOTQ1YzIxZTI0NDIzMjU4OWU1NDFhZmFiODMzYg");
    
    miControladorProductos.agregarProducto("Real Bison, Beef+Sweat Potato Recipe", "Croquetas Real Bison, Beef+Sweat Potato Recipe de Merrick para perros. Elaboradas con carne de bisonte real, carne de res y batata.", "Merrick"
    , "Perro", "accesorio", 12, 680.00, "10", 12, "https://m.media-amazon.com/images/I/813nUhMqr7L._AC_SY355_.jpg");

 } 

