
import { Producto } from "../helpers/Producto.js";

export class Comic extends Producto {
  cantidadPaginas;
  generoComic;
  editorial;
  constructor(
    idProducto,
    nombreProducto,
    precioProducto,
    cantidadProducto,
    tipoProducto, 
    imagenProducto,
    cantidadPaginas,
    generoComic,
    editorial
      ) {
    super(idProducto, nombreProducto, precioProducto, cantidadProducto, tipoProducto, imagenProducto);
    this.cantidadPaginas = cantidadPaginas;
    this.generoComic = generoComic;
    this.editorial = editorial;

  }
}
