import React from 'react'
import { useAuth } from '../../context/Auth'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({Component}) => {
    const {isAuth} = useAuth()
  return (
    <>
{
    isAuth 
    ?<Component/>
    : <Navigate to='/auth/login' />
}
    </>
  )
}

export default PrivateRoutes