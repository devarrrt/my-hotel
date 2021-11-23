import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { Context } from '../AppContext'

const RequireAuth = ({ children }) => {
    const { user } = useContext(Context) 

    if (!user ) {
        return <Navigate to="/login" />
    }
    return children
}

export default RequireAuth
