
import { Producto } from "../helpers/Producto.js";

export class Vaso extends Producto {
  tamano;
  color;

  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    tipoProducto,
    imagenProducto,
    tamano,
    color,
    
      ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto, tipoProducto, imagenProducto);
    this.tamano = tamano;
    this.color = color;

  }
}