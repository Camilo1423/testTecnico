import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { Routes, Route } from 'react-router-dom'
import MenuOptions from '../components/MenuOptions'
import Producto from './dashboard/producto/Producto'
import SingleProduct from './dashboard/producto/singleProduct/SingleProduct'
// componentes internos

const Dashboard = () => {

  return (
    <div>
        <NavbarAdmin />
          <Routes>
            <Route path="/register/*" element={<MenuOptions />}/>
            <Route path="/productos/*" element={<Producto />}/>
            <Route path="/singleproduct/:id" element={<SingleProduct />}/>
          </Routes>
    </div>
  )
}

export {Dashboard}
