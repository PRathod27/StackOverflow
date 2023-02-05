import React, { useState } from 'react'
import AboutAuth from 'C:/React/stack/client/src/Pages/Auth/AboutAuth.jsx'
import icon from 'C:/React/stack/client/src/assests/icon.svg'
import Auth from './Auth.css'

const Home = () => {

  const [isSignup, setIsSignup] = useState(false)

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  return (
    <section className='auth-section '>
      {isSignup && <AboutAuth/>}
        <div className='auth-container-2'>
          {!isSignup && <img src = {icon}  alt='stack-overflow' className='login-logo' width = '20px'/> }
          <form>
            {
              isSignup && (
                <label htmlFor='name'>
                  <h4>Display Name</h4>
                  <input type = 'text' id='name' name = 'name'/>
                </label>
              )
            }
            <label htmlFor="email">
              <h4>Email</h4>
              <input type = "email" name='email' id='email' ></input>
            </label>
            <label htmlFor='password'>
            <div style={{display : 'flex', justifyContent: 'space-between'}}>
              <h4>Password</h4>
              { !isSignup && <p style={{ color: "#007ac6", fontSize:'13px', cursor:'pointer'}}>forgot password?</p> }
              </div>
              <input type= "password" name='password' id='password' />
              {isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Password must contain at least eight <br/>characters, including at least 1 letter and<br/> 1 number.</p>}
            </label>
            {
              isSignup && (
                <label htmlFor='check'>
                  <input type= 'checkbox' id = "check" />
                  <p>Opt-in to receive occasional,<br/>product updates, user research invitaions,<br/> company announcements, and digests. </p>
                </label>
              )
            }
            <button type="submit" className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
            {
                        isSignup && (
                            <p style={{ color: "#666767", fontSize:"13px", justifyContent: 'center'}}>

                                By clicking “Sign up”, you agree to our 
                                <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
                                <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                                <span style={{ color: "#007ac6"}}> cookie policy</span>
                            </p>
                        )
                    }
          </form>
          <p>
            {isSignup ? 'already have an account ?' : "Don't have an account ?"}
            <button type= 'button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log in": "sign up"}</button>
          </p>
        </div>
    </section>
  )
}

export default Home