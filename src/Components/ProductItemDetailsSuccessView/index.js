import { HiStar } from "react-icons/hi";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import CartContext from '../CartContext'
import { useContext } from 'react'
import './index.css'
import SimilarProductItem from "../SimilarProductItem";

const ProductItemDetailsSuccessView = (props) => {
  const {addToCart} = useContext(CartContext)

 
    const {ItemDetails} = props
    // console.log(ItemDetails)
    const {availability,brand,description,imgUrl,price,rating,similarProducts,title,totalReview} = ItemDetails
    // console.log(similarProducts)
    

    const [addCardItemsCount,setAddCardItemsCount] = useState(1)
    const onIncreamentCartItems=()=>{
            setAddCardItemsCount(prevCount=>(prevCount+1))
    }

     const onDecreamentCartItems=()=>{

           if( addCardItemsCount>1){

            setAddCardItemsCount(prevCount=>(prevCount-1))
           }
    }

     const onAddtoCartClick=()=>{
    addToCart(ItemDetails)
    
  }
    
  return (
    <div className='details_Container'>

        <div className='details_Card'>

            <img className='specificProductImage' src={imgUrl}/>
            <div className="content_container">
                <h1 className='title'>{title}</h1>
                <p className='price'>Rs {price}/-</p>
                <div className='review-container'>
                    
                     <div className='ratingstarContainer'>
                     <p className='ratingstar'> {rating} </p>
                     < HiStar className="ratingstar star"/> 
                      </div>
                    <p className="totalReviews">{totalReview} Reviews</p>

                </div>
                <p className="desc">
                    {description}
                </p>
                <p className="availabletext"> Available:<span className="availabletextValue">{availability}</span> </p>
                 <p className="availabletext"> Brand:<span className="availabletextValue">{brand}</span> </p>

                    <div>
                 <hr className="line"/>
                 </div>

                 

                        <div>

                        <CiCircleMinus onClick={onDecreamentCartItems} className="cartdecreament" />
                        <span className="cartItemsCount"> {addCardItemsCount} </span>
                        <CiCirclePlus onClick={onIncreamentCartItems}  className="cartdecreament" />
                        <div>
                        <button onClick={onAddtoCartClick} className="cartButton">ADD TO CART</button>
                        </div>
                        </div>
                   

            </div>



        </div>

        <h1 className="similaryProductsHeading"> Similar Products </h1>

        <ul className="similarProducts_container">
        
          {similarProducts.map((similarItem)=>(

             <SimilarProductItem key = {similarItem.id} similarItemDetails={similarItem} />

          ))}

         

          </ul>

    </div>
  )
}

export default ProductItemDetailsSuccessView