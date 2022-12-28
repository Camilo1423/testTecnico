import { Producto } from "../helpers/Producto.js";

export class Camiseta extends Producto {
  talla;
  color;
  sexo;
  marca;
  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    tipoProducto, 
    imagenProducto,
    talla,
    color,
    sexo,
    marca
  ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto, tipoProducto, imagenProducto);
    this.talla = talla;
    this.color = color;
    this.sexo = sexo;
    this.marca = marca;

  }
  entradaProducto(){
  }
  salidaProducto(){
  }

}