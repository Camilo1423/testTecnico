
import { Producto } from "../helpers/Producto.js";

export class Juguete extends Producto {
  tamano;
  color;
  marca;

  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    tipoProducto, 
    imagenProducto,
    tamano,
    color,
    marca
    
      ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto, tipoProducto, imagenProducto);
    this.tamano = tamano;
    this.color = color;
    this.marca = marca;

  }
}