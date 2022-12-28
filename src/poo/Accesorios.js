import { Producto } from "../helpers/Producto.js";

export class Accesorios extends Producto {
    tipo;
    tamano;
    color;
    constructor(
        idProducto,
        nombreProducto,
        precioProducto,
        cantidadProducto,
        tipoProducto, 
        imagenProducto,
        tipo,
        tamano,
        color,
    ) {
        super(idProducto, nombreProducto, precioProducto, cantidadProducto, tipoProducto, imagenProducto)
        this.tipo = tipo;
        this.tamano = tamano;
        this.color = color;
    }

}