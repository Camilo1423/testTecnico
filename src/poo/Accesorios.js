import { Producto } from "../helpers/Producto.js";

export class Accesorios extends Producto {
    tipo;
    tamano;
    color;
    constructor(
        idProducto,
        universoFilm,
        nombreProducto,
        tipoProducto, 
        image,
        tipo,
        tamano,
        color,
    ) {
        super(idProducto, universoFilm, nombreProducto, tipoProducto, image)
        this.tipo = tipo;
        this.tamano = tamano;
        this.color = color;
    }

}