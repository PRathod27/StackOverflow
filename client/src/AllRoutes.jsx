import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from '../../client/src/Pages/Home/Home.jsx'
import Auth from '../../client/src/Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions.jsx'
import AskQuestion from './Pages/AskQuestion/AskQuestion.jsx'

const AllRoutes = () => {
  return (
    
    
      <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/Auth' element = {<Auth/>} />
            <Route path='/Questions' element = {<Questions/>} />
            <Route path='/AskQuestion' element = {<AskQuestion/>} />
            </Routes>
  
  )
}

export default AllRoutes