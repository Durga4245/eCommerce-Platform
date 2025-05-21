import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Home = () => {

  const Navigate=useNavigate()

  const onShopNow = ()=>{

    Navigate("/products")

  }
  return (
    <div className='homeContainer'>

        <div className='wrapper'>
        <h1 className='homePageHeading'> Clothes That Get YOU Noticed </h1>
        <div className='imgcon'>
        <img className='homeImage' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothes that get you noticed"/>
        
        
        <p className='homePageDesc'> Fashion is part of the daily air and it does not quite help that it changes all the time.
             Clothes have always been a marker of the era and we are in a revolution. 
             Your fashion makes you been seen and heard that way you are.
            So, celebrate the seasons new and exciting fashion in your own way.
         </p>
        
          <div className='btnCOn'>
         <button onClick={onShopNow} className='shopnowButton'> Shop Now</button>
         
         </div>
         </div>
         </div>
         <img className='homeimgLg' src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="clothes that get you noticed"/>
        
    </div>
  )
}

export default Home