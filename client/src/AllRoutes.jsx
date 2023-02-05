import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../../client/src/Pages/Home/Home.jsx'
import Auth from 'C:/React/stack/client/src/Pages/Auth/Auth.jsx'

const AllRoutes = () => {
  return (
    
    <Router>
      <Routes>
            <Route path='/Home' element = {<Home/>}/>
            <Route path='/Auth' element = {<Auth/>} />
            </Routes>
            </Router>
  
  )
}

export default AllRoutes