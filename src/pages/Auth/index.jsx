import { Route, Routes } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import ResetPassword from './ResetPassword'

const Auth = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='*' element={<></>} />
      </Routes>
    </>
  )
}

export default Auth