import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
} from "reactstrap";
import '../css/components/navBar.css'
import { fullName, role } from '../helpers/dataUser';


const Navbar = () => {
    const logoutSession = () => {
        localStorage.clear()
        location.reload()
    }
  return (
    <header className='navBar'>
      <Nav pills>
            <NavItem>
            <Link to="/">
                Inicio
            </Link>
            </NavItem>
            <NavItem>
            <Link to="tienda">
                Productos
            </Link>
            </NavItem>
            {!role ? (
                <>
                    <NavItem className='Contenedor'>
                    <Link className='loginComponent' to="/login">Iniciar sesion</Link>
                    </NavItem>
                    <NavItem className='Contenedor'>
                    <Link className='registerComponent' to="/register">Registrarme</Link>
                    </NavItem>

                </>
            ) : (
                <>
                    <NavItem>
                        <Link to="carrito">
                            carrito
                        </Link>
                    </NavItem>
                    <button onClick={() => logoutSession()}>Cerrar sesión</button>
                </>
            )}
        </Nav>
        <section className="dataUser">
            {fullName ? (
                <>
                    <Link to={role == 'user' ? '/userpanel' : '/dashboard'}>Ir al tablero</Link>
                    <h2>Bienvenid@ {fullName}</h2>
                </>
            ) : ''}
        </section>
    </header>
  )
}

export default Navbar
