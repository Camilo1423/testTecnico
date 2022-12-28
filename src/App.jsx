import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import UserContext from './context/UserContext'
import { token } from './helpers/dataUser'
import AdminAccess from './middleware/AdminAccess'
import PrivatedRoute from './middleware/PrivateRoute'

import { Login, Register, Dashboard, Home, UserPanel } from './pages/Pages'


function App() {
  const [userData, setUserData] = useState()
  useEffect(() => {
    if(token != null) setUserData(JSON.parse(localStorage.login))
  }, [])

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Router>
        <Routes>
          <Route index path='/*' element={<Home /> }/>
          <Route path='/login' element={<Login /> }/>
          <Route path='/register' element={<Register /> }/>
          <Route element={<PrivatedRoute user={userData} redirectTo="/"/>}>
            <Route element={<AdminAccess userRole={userData} roleAccess='user' redirecTo="/"/>}>
              <Route path='/userpanel' element={<UserPanel /> }/>
            </Route>
            <Route element={<AdminAccess userRole={userData} roleAccess='admin' redirecTo="/"/>}>
              <Route path='/dashboard/*' element={<Dashboard /> }/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
