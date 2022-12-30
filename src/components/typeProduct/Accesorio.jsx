import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/components/typeProduct/typeProduct.css'

const Accesorio = ({accesorio, entradas, salidas, action}) => {
    const { 
        _id, 
        idProducto, 
        universoFilm, 
        nombreProducto, 
        tipoProducto, 
        imagenProducto, 
        tipo, 
        tamano, 
        color,
        sexo,
        marca,
        cantidadPaginas,
        generoComic,
        editorial
     } = accesorio
  return (
    <div className='productContentCard'>
        <section className="productImg">
            <img src={imagenProducto} alt={nombreProducto} />
        </section>
        <section className="productInformation">
            <h2>{nombreProducto}</h2>
            <h4>ID: {idProducto}</h4>
            <p>Categoria: {tipoProducto}</p>
            <p>Universo cinematografico: {universoFilm}</p>
            <p>Unidades en Stock: <strong>{entradas && entradas - salidas}</strong></p>
            <h5>Acciones:</h5>
            <section className="actionProduct">
                <button type='button' className='btnAction' onClick={() => alert('Seguimos trabajando en esta funcion...')}>
                    <i className='bx bx-message-square-edit'></i>
                    <p>Editar</p>
                </button>
                <button type='button' className='btnAction' onClick={() => action(_id, )}>
                    <i className='bx bx-trash' ></i>
                    <p>Eliminar</p>
                </button>
                <button type='button' className='btnAction' onClick={() => history.back()}>
                    <i className='bx bx-chevron-left' ></i>
                    <p>Regresar</p>
                </button>
            </section>
            <h5>Caracteristicas principales</h5>
            <ul>
                {tipo ? <li>Tipo: {tipo}</li> : null}
                {tamano ? <li>Tamaño: {tamano}</li> : null}
                {color ? <li>Color: {color}</li> : null}
                {sexo ? <li>Genero: {sexo}</li> : null}
                {marca ? <li>Marca: {marca}</li> : null}
                {cantidadPaginas ? <li>Paginas {cantidadPaginas}</li> : null}
                {generoComic ? <li>Genero: {generoComic}</li> : null}
                {editorial ? <li>Editorial: {editorial}</li> : null}
            </ul>
            <h5>Registrar Entradas o Salidas</h5>
            <section className="linkAccess">
                <Link to={`/dashboard/entradas/${_id}`}>Registrar entradas</Link>
                <Link to={`/dashboard/salidas/${_id}`}>Registrar salidas</Link>
            </section>
        </section>
    </div>
  )
}

export default Accesorio