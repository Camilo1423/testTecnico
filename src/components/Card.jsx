import React from 'react'
import { Link } from 'react-router-dom'
import '../css/components/Card.css'

const Card = ({datosCard}) => {
    const {_id, imagenProducto, nombreProducto, idProducto, universoFilm, tipoProducto} = datosCard
  return (
    <div className='singleCard'>
        <section className="imgCard">
            <img src={imagenProducto} alt="imagen-de-la-tarjeta" />
        </section>
        <section className="textCard">
            <h4>{nombreProducto}</h4>
            <ul>
                <li>ID del producto: <strong>{idProducto}</strong></li>
                <li>Universo cinematografico <strong>{universoFilm}</strong></li>
                <li>Tipo de producto <strong>{tipoProducto}</strong></li>
            </ul>
        </section>
        <Link to={`/dashboard/singleproduct/${_id}`} className="seeProduct"> Ver producto </Link>
    </div>
  )
}

export default Card