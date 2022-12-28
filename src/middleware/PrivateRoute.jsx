import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { token } from '../helpers/dataUser'


const PrivateRoute = ({user, children, redirecTo="/"}) => {
    if(!token && !user) {
        return <Navigate to={redirecTo}/>
    }
  return children ? children : <Outlet />
}

export default PrivateRoute
