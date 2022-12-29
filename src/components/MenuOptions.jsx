import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { CreateHome, CreateAccesorio, CreateCamiseta, CreateJuguete, CreateComic, CreateVaso } from '../pages/dashboard/create'
import '../css/components/MenuOptions.css'

const MenuOptions = () => {
  return (
    <div className='menuOptions'>
      <ul>
        <li><Link to="registerAccesorio">Accesorios</Link></li>
        <li><Link to="registerCamisa">Camisas</Link></li>
        <li><Link to="registerComic">Comics</Link></li>
        <li><Link to="registerJuguete">Juguetes</Link></li>
        <li><Link to="registerVaso">Vasos</Link></li>
      </ul>
      <Routes>
          <Route path="/" element={<CreateHome />}/>
          <Route path="/registerAccesorio" element={<CreateAccesorio />}/>
          <Route path="/registerCamisa" element={<CreateCamiseta />}/>
          <Route path="/registerComic" element={<CreateComic />}/>
          <Route path="/registerJuguete" element={<CreateJuguete />}/>
          <Route path="/registerVaso" element={<CreateVaso />}/>
        </Routes>
    </div>
  )
}

export default MenuOptions
