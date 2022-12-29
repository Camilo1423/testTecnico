export class Producto {
    idProducto;
    universoFilm;
    nombreProducto;
    tipoProducto;
    image;

    constructor(idProducto, universoFilm, nombreProducto, tipoProducto, image) {
        this.idProducto = idProducto;
        this.universoFilm = universoFilm;
        this.nombreProducto = nombreProducto;
        this.tipoProducto = tipoProducto;
        this.image = image

    }
    entradaProducto() {}
    salidaProducto() {} 
}