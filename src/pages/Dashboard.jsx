import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { Routes, Route } from 'react-router-dom'
import MenuOptions from '../components/MenuOptions'

// componentes internos

const Dashboard = () => {
  return (
    <div>
        <NavbarAdmin />
        <Routes>
          <Route path="/register/*" element={<MenuOptions />}/>
        </Routes>
    </div>
  )
}

export {Dashboard}
