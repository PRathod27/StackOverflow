import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from '../../client/src/Pages/Home/Home.jsx'
import Auth from '../../client/src/Pages/Auth/Auth'

const AllRoutes = () => {
  return (
    
    
      <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Auth' element = {<Auth/>} />
            </Routes>
  
  )
}

export default AllRoutes