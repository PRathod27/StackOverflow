import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import stack from '../../assests/stack.png'
import search from '../../assests/search.svg' 
import Avatar from '../../components/Avatar/Avatar'



import './Navbar.css'

const Navbar = () => {

    var User = null
  return (
    <nav className='main-nav'>
    <div className='navbar'>
        <Link to = '/' className='nav-item nav-logo'>
            <img src= {stack} alt = 'Logo' width= '140px'></img>
        </Link>
        <Link to = '/' className='nav-item nav-btn'>About</Link>
        <Link to = '/' className='nav-item nav-btn'>Products</Link>
        <Link to = '/' className='nav-item nav-btn'>For Teams</Link>
        <form>
                <input type = "text" placeholder='Search..'/>
                <img src= {search} alt = 'search' width= '14px' className='search-icon'></img>
        </form>
        {
         User === null ?
               <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
               <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>M</Avatar>
                        <button className='nav-item nav-links' >Log out</button>
               </>
        }

    </div>
    </nav>
  )
}

export default Navbar