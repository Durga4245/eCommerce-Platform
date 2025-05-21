import React from 'react'
import LoginForm from '../LoginForm'
import './index.css'

const LoginFormContainer = () => {
  return (
    <div className='loginFormContainer'>

       
        <div className='wrapper'>
        <img className='websiteLogo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt ="websitelogo"/>
        <img className='websiteLoginimg' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="website login"/>
        
        </div>

     {/* <div className='formcon'> */}
       
        <LoginForm/>
        {/* </div> */}
   
       
        
        

        


    

    </div>
  )
}

export default LoginFormContainer