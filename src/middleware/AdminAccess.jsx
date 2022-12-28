import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { role } from '../helpers/dataUser'


const AdminAccess = ({ userRole, roleAccess, children, redirecTo="/"}) => {
    if(!role) {
        if(userRole.role != roleAccess){
            return <Navigate to={redirecTo}/>
        }
    } else if(role != roleAccess) {
        return <Navigate to={redirecTo}/>
    }

    return children ? children : <Outlet />
}

export default AdminAccess
