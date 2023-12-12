import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
import Forgetpassword from '../components/Forgetpassword'
import Resetpassword from '../components/Resetpassword'
function AppRoutes() {
  return (
  <Routes>
  
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/forgetpassword' element={<Forgetpassword/>}/>
  <Route path='/resetpassword' element={<Resetpassword/>}/>
  <Route path='/*' element={<Navigate to = '/home'/>}/>
  

  </Routes>
  )
}

export default AppRoutes