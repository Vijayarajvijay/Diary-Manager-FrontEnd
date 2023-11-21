import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Home from '../components/Home'
function AppRoutes() {
  return (
  <Routes>
  
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/*' element={<Navigate to = '/home'/>}/>

  </Routes>
  )
}

export default AppRoutes