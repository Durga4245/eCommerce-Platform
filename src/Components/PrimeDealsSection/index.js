// import React, { useState } from 'react'
import { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import ProductItem from '../ProductItem'
import { TailSpin } from 'react-loader-spinner' 
import './index.css'


const primeProductsAPIConstants = {
    initial:"INITIAL",
    inProgress:"IN_PROGRESS",
    success:"SUCCESS",
    failure:"FAILURE",
}

const PrimeDealsSection = () => {

const [primeProductsAPI,setPrimeProductsAPI] = useState({
    status:primeProductsAPIConstants.initial,
    data:null,
    error:null,

})

useEffect(()=>{

    setPrimeProductsAPI((prevState)=>({...prevState,status:primeProductsAPIConstants.inProgress}))

    const jwtToken = Cookies.get("jwt_Token")
    const primeDealsUrl = "https://apis.ccbp.in/prime-deals"
    const options={
        method:"GET",
        headers:{
            Authorization:`Bearer ${jwtToken}`
        }
    }

    const getPrimeDealsData = async()=>{
        const response = await fetch(primeDealsUrl,options)

        try{
            if(response.ok){
                const primeDealsData = await response.json()
                // console.log(primeDealsData)
                const formattedData = primeDealsData.prime_deals.map(primeProduct=>({
                    availability:primeProduct.availability,
                    brand:primeProduct.brand,
                    description:primeProduct.description,
                    id:primeProduct.id,
                    imgUrl:primeProduct.image_url,
                    price:primeProduct.price,
                    rating:primeProduct.rating,
                    style:primeProduct.style,
                    title:primeProduct.title,
                    totalReview:primeProduct.total_reviews,
                }))

                setPrimeProductsAPI(prevState=>({...prevState,status:primeProductsAPIConstants.success,data:formattedData}))
            }
            else{
                 setPrimeProductsAPI(prevState=>({...prevState,status:primeProductsAPIConstants.failure}))
            }

            
        }
        catch(error){

             setPrimeProductsAPI(prevState=>({...prevState,status:primeProductsAPIConstants.failure,error:error.message}))
        }
    }

    getPrimeDealsData()
},[])



const primeLoadingView =()=>{

 return(  
    null
    //  <div className="spinner">
//             <div>
//         <TailSpin
//           height={50}
//           width={50}
//           color="#4fa94d"
//           ariaLabel="loading"
//         />
//         </div>
//         </div>
 )

  
}
const primeSuccessView=()=>{
      return (
        <div className='bg_container'>
            <h1> Exclusive Prime Deals </h1>
            <ul className='primeProductsContainer'>
            {primeProductsAPI.data.map(primeproduct=>(
                <ProductItem key = {primeproduct.id} primeProductDetails={primeproduct}/>
            ))}
            </ul>

            </div>
      )
}
const primeFailureView=()=>{

    return (
        <div className='primeFailureContainer'>
           <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="register prime"
      className="register-prime-img"
    />

        </div>
    )


}



const renderedOutput = ()=>{

    const {status} = primeProductsAPI

    switch(status){
        case primeProductsAPIConstants.inProgress:
            return primeLoadingView()

            case primeProductsAPIConstants.success:
                return primeSuccessView()

                case primeProductsAPIConstants.failure:

                    return primeFailureView()
    }
}



  return (
    <>
        {renderedOutput()}
    </>
  )
}

export default PrimeDealsSection