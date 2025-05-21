import React from 'react'
import Cookies from 'js-cookie'
import { useNavigate,Link } from 'react-router-dom'
import './index.css'

const Header = () => {

  const navigate = useNavigate()

const onLogOut = ()=>{
  Cookies.remove("jwt_Token")
  navigate("/login")


}

  return (
    <>
    <div className='HeaderContainer'>

        <div className='headerCard'>

            <img className='homeWebsitelogo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="websiteogo"/>
            <img onClick={onLogOut} className='logoutlogo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png " alt ="logout"/>
        </div>

        <div className='NavIconsContainer'>

         <Link to="/">   <img className='homologo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png" alt="homelogo"/> </Link>
         <Link to="/products">  <img className='homologo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png" alt = "ProductsLogo"/> </Link> 
           <Link to="/cart">  <img className='cartlogo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png" alt ="cartIcon"/></Link>   

        </div>
        

    </div>


     <div className='HeaderContainerlg'>

        <div className='headerCard'>

            <img className='homeWebsitelogo' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="websiteogo"/>
      
        <ul className='navcontainerlg'>
           <li>  <Link to="/"  className='navHeadings'>   Home </Link></li>
           <li>  <Link to="/products"  className='navHeadings'> Products  </Link> </li>
            <li>  <Link to="/cart"  className='navHeadings'>  Cart</Link> </li>
            <li> <button className='logoutbutton'  onClick={onLogOut}> Logout </button></li>
          </ul>
        
        </div>

      </div>
        

   



    </>
  )
}

export default Header