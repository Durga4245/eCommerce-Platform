import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = (props) => {

    const {children} =props
    const jwtToken = Cookies.get("jwt_Token")
    const navigate = useNavigate()

    useEffect(()=>{

        if(jwtToken===undefined){
            navigate("/login")
        }

    },[jwtToken, navigate])
    
   
   
   
   return jwtToken !== undefined && <>{children}</> 
   
  
}

export default ProtectedRoute