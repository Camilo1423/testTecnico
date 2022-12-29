
import { Producto } from "../helpers/Producto.js";

export class Juguete extends Producto {
  tamano;
  color;
  marca;

  constructor(
    idProducto,
    universoFilm,
    nombreProducto,
    tipoProducto, 
    image,
    tamano,
    color,
    marca
    
      ) {
    super(idProducto, universoFilm, nombreProducto, tipoProducto, image);
    this.tamano = tamano;
    this.color = color;
    this.marca = marca;

  }
}