import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const ProductItem = (props) => {

  const {primeProductDetails} = props
  const {brand,imgUrl,price,rating,style,title,id} = primeProductDetails
  // console.log(primeProductDetails)
  return (
    <li  className='productCard'>
      <Link to={`/products/${id}`} className="product-link">

      <img className='productAvatar' src={imgUrl} alt={title}/>
      <h1 className='style'> {title}</h1>
      <p className='brand'> by {brand}</p>
      <div className='priceratingcontainer'>
        <p>Rs {price}/-</p>
        <div className='ratingContainer'>
          <p className='rating'> {rating} ✰</p>

        </div>
      </div>

      </Link>
        
    </li>
  )
}

export default ProductItem