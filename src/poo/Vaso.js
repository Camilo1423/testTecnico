
import { Producto } from "../helpers/Producto.js";

export class Vaso extends Producto {
  tamano;
  color;

  constructor(
    idProducto,
    universoFilm,
    nombreProducto,
    tipoProducto,
    image,
    tamano,
    color,
    
      ) {
    super(idProducto, universoFilm, nombreProducto, tipoProducto, image);
    this.tamano = tamano;
    this.color = color;

  }
}