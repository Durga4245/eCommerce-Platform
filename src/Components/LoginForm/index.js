import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import './index.css'

const LoginForm = () => {
  

  const navigate = useNavigate()

  const[userDetails,setuserDetails] = useState({username:"",password:""})
  const [showErrorMsg,setShowErrorMsg] = useState(false)
  const [errorMsg,setErrorMsg]=useState("")

  const onchnageUserName = (event)=>{

    setuserDetails({...userDetails,username:event.target.value})
    

  }

  const onchnagePassword = (event)=>{

    setuserDetails({...userDetails,password:event.target.value})


  }

  const onSubmitSuccess=(jwtToken)=>{
   
    if(jwtToken!==undefined){

      Cookies.set("jwt_Token",jwtToken,{expires:30})
      navigate("/")

    }
 
    
    
  }

  const onSubmitFailure = (errormsg)=>{
    setShowErrorMsg(true)
    setErrorMsg(errormsg)
    
  }


  const onLogin = async(event)=>{

  event.preventDefault()
   
    const url="https://apis.ccbp.in/login"
    const options = {
      method:"POST",
      body:JSON.stringify(userDetails)
    }

    const response = await fetch(url,options)
    const data = await response.json()
    if(response.ok===true){
      onSubmitSuccess(data.jwt_token)
    }
    else{
      onSubmitFailure(data.error_msg)
    }
  
  }

 


  useEffect(()=>{
    const storedToken = Cookies.get("jwt_Token")
  
    if(storedToken!==undefined){

      navigate("/")
      
    }

  },[])
 
  return (

    
    <div className='formContainer'>

        <form onSubmit={onLogin}>
          
        <label htmlFor='username'> USERNAME</label>
        <input onChange={onchnageUserName} id="username" type ="text"/>
            <label htmlFor='password'>PASSWORD</label>
            <input onChange={onchnagePassword} id="password" type ="password"/>
         
         
            <div className='buttoncontainer'>
            <button className='loginButton'>Login</button>
            {showErrorMsg &&  <p className="error"> *{errorMsg}</p>}
            </div>
        </form>



    </div>
  )
}

export default LoginForm