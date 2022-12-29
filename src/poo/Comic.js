
import { Producto } from "../helpers/Producto.js";

export class Comic extends Producto {
  cantidadPaginas;
  generoComic;
  editorial;
  constructor(
    idProducto,
    universoFilm,
    nombreProducto,
    tipoProducto, 
    image,
    cantidadPaginas,
    generoComic,
    editorial
      ) {
    super(idProducto, universoFilm, nombreProducto, tipoProducto, image);
    this.cantidadPaginas = cantidadPaginas;
    this.generoComic = generoComic;
    this.editorial = editorial;

  }
}
