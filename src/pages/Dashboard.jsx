import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { Routes, Route } from 'react-router-dom'
import MenuOptions from '../components/MenuOptions'
import Producto from './dashboard/producto/Producto'
import SingleProduct from './dashboard/producto/singleProduct/SingleProduct'
import Orders from './dashboard/orders/Orders'
import Information from './dashboard/home/Information'
import Entrada from './dashboard/producto/entradaSalida/Entrada'
import Salida from './dashboard/producto/entradaSalida/Salida'


// componentes internos

const Dashboard = () => {

  return (
    <div>
        <NavbarAdmin />
          <Routes>
            <Route path="/" element={<Information />}/>
            <Route path="/productos/*" element={<Producto />}/>
            <Route path="/register/*" element={<MenuOptions />}/>
            <Route path="/orders/*" element={<Orders />}/>
            <Route path="/singleproduct/:id" element={<SingleProduct />}/>
            <Route path="/entradas/:id" element={<Entrada />}/>
            <Route path="/salidas/:id" element={<Salida />}/>
          </Routes>
    </div>
  )
}

export {Dashboard}
