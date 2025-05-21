import React from 'react'
import { HiStar } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import {similarProductItemsIdContext} from '../ProductItemDetails'
import { useContext } from 'react';
import './index.css'

const SimilarProductItem = (props) => {



 
  const navigate = useNavigate()

  const onSimilarProductHandler=(id)=>{

    navigate(`/products/${id}`)

    

  }

    const {similarItemDetails} = props
    
    const {imgUrl,title,brand,price,rating,id} = similarItemDetails
  return (
    <div onClick={()=>{onSimilarProductHandler(id)}} className='similarProductItemCard'>

        <img className='similaryProductAvatar' src={imgUrl} alt="similarProduct"/>
        <h4 className='similarprodcutTitle'> {title} </h4>
        <p className='similarProductBrand'>by {brand}</p>
        <div className='priceRatingContainer'>
        <h3 className='similarProductPrice'> Rs {price}/- </h3>
        
             <div className='SimilarProductratingstarContainer'>
                                 <p className='ratingstar'> {rating} </p>
                                 < HiStar className="ratingstar star"/> 
                                  </div>

        </div>


    </div>
  )
}

export default SimilarProductItem