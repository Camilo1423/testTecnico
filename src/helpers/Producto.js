export class Product {
    idProducto;
    nombreProducto;
    precioProducto;
    cantidadProducto;
    tipoProducto;
    imagenProducto;

    constructor(idProducto, nombreProducto, precioProducto, cantidadProducto, tipoProducto, imagenProducto) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.cantidadProducto = cantidadProducto;
        this.tipoProducto = tipoProducto;
        this.imagenProducto = imagenProducto

    }
    entradaProducto() {}
    salidaProducto() {} 
}