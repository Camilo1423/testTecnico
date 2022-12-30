import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
} from "reactstrap";
import UserContext from '../context/UserContext';
import '../css/components/navBar.css'
import { fullName } from '../helpers/dataUser';

const NavbarAdmin = () => {

    const {userData} = useContext(UserContext)
    const logoutSession = () => {
        localStorage.clear()
        location.reload()
    }
  return (
    <header className='navBar'>
      <Nav pills>
            <NavItem>
                <Link to="">Inicio</Link>
            </NavItem>
            <NavItem>
                <Link to="productos">Productos</Link>
            </NavItem>
            <NavItem>
                <Link to="orders">Pedidos</Link>
            </NavItem>
            <NavItem>
                <Link to="register">Ingresar productos</Link>
            </NavItem>
        </Nav>
        <section className="dataUser">
            <button onClick={() => logoutSession()}>Cerrar sesión</button>
            <a href="/">Ir al inicio</a>
            <h2>Bienvenid@ {fullName || userData.fullName}</h2>
        </section>
    </header>
  )
}

export default NavbarAdmin
