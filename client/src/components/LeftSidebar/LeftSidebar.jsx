import React from "react"
import { NavLink } from 'react-router-dom' 
import Globe from '../../assests/Globe.svg'


const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <nav>
                <NavLink to = '/' className= 'side-nav-links'>
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                        <div><p>PUBLIC</p></div>
                        <NavLink to = '/Questions'>
                            <img src= {Globe} alt = 'Globe' />
                            <p style={{paddingLeft : "10px"}}>Questions</p>
                        </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default LeftSidebar