import React from 'react'
import RightSidebar from './RightSidebar.css' 
import comment from '../../assests/comment.svg'
import pen from '../../assests/pen.svg'
// import blacklogo from '../../assests/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <img src={pen} alt = 'pen' width='16px'/>
            <p>
                Observability is key to the future of software (and your DevOps carrer). 
            </p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src = {pen} alt = 'comm' width='16px'/>
            <p>Podcast 374: How valuable is your screen name?</p>
        </div>
    </div>
  )
}

export default Widget