import { Producto } from "../helpers/Producto.js";

export class Camiseta extends Producto {
  tamano;
  color;
  sexo;
  marca;
  constructor(
    idProducto,
    universoFilm,
    nombreProducto,
    tipoProducto, 
    image,
    tamano,
    color,
    sexo,
    marca
  ) {
    super(idProducto, universoFilm, nombreProducto, tipoProducto, image);
    this.tamano = tamano;
    this.color = color;
    this.sexo = sexo;
    this.marca = marca;

  }
  entradaProducto(){
  }
  salidaProducto(){
  }

}