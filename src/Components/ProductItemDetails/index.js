import { useState,useEffect } from 'react'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { TailSpin } from "react-loader-spinner";
import { useCallback } from 'react';
import './index.css'
import ProductItemDetailsSuccessView from '../ProductItemDetailsSuccessView';


// export const similarProductItemsIdContext = createContext()

const productItemDetailsAPiConstants =  {
  initial:"INITIAL",
  inProgress:"IN_PROGRESS",
  success:"SUCCESS",
  failure:"FAILURE",
}


const jwtToken = Cookies.get("jwt_Token")


const ProductItemDetails = () => {

  const [productsItemDetailsAPI,setproductsItemDetailsAPI] = useState({
    status:productItemDetailsAPiConstants.initial,
    data:null,
    error:null
  })

  const {id}=useParams()
  

// const [itemDetailsId,setitemDetailsId] = useState(id)
  useEffect(()=>{
    

    setproductsItemDetailsAPI(prevState=>({...prevState,status:productItemDetailsAPiConstants.inProgress})) //loading view will be triggered

    const url = `https://apis.ccbp.in/products/${id}`
    const options={
      method:"GET",
      headers:{
        Authorization: `Bearer ${jwtToken}`
      }

    }

    const getProductItemDetails =async()=>{

    const response = await fetch(url,options)

    try{

        if(response.ok){
          const productDetailsData = await response.json()
          
         
          const formattedData = {
            availability:productDetailsData.availability,
            brand:productDetailsData.brand,
            description:productDetailsData.description,
            id:productDetailsData.id,
            imgUrl:productDetailsData.image_url,
            price:productDetailsData.price,
            rating:productDetailsData.rating,
            
            similarProducts:productDetailsData.similar_products.map(similarProduct=>({
            availability:similarProduct.availability,
            brand:similarProduct.brand,
            description:similarProduct.description,
            id:similarProduct.id,
            imgUrl:similarProduct.image_url,
            price:similarProduct.price,
            rating:similarProduct.rating,
            style:similarProduct.style,
            title:similarProduct.title,
            totalReview:similarProduct.total_reviews,

            })),

            title:productDetailsData.title,
            totalReview:productDetailsData.total_reviews
          }

            
               setproductsItemDetailsAPI(prevState=>({...prevState,data:formattedData,status:productItemDetailsAPiConstants.success})) //successBiew Triggered
            
        }else{

              setproductsItemDetailsAPI(prevState=>({...prevState,status:productItemDetailsAPiConstants.failure,error:"404 not Found"})) //failed  Triggered

        }

    }
    catch(error){

           setproductsItemDetailsAPI(prevState=>({...prevState,status:productItemDetailsAPiConstants.failure,error:"Fetch failed"}))  //may be network failure

    }

  }

  getProductItemDetails()


  },[id])

  // const onOpeningSimilarProducts=(similarProductId)=>{

  //   setitemDetailsId(similarProductId)





  // }

  const productItemDetailsLoadingView = ()=>{

    return <div className="spinner">
        <div>
          <TailSpin
            height={50}
            width={50}
            color="#4fa94d"
            ariaLabel="loading"
          />
        </div>
      </div>

  }
  const productItemDetailsSuccessView = ()=>(

  
  <ProductItemDetailsSuccessView ItemDetails={productsItemDetailsAPI.data}  />
  

    
  );

  const productItemDetailsFailureView = ()=>{}


const renderProductItemDetails=()=>{

  const {status}=productsItemDetailsAPI
  switch(status){

    case productItemDetailsAPiConstants.inProgress:
      return productItemDetailsLoadingView()

      case productItemDetailsAPiConstants.success:
        return productItemDetailsSuccessView()

        case productItemDetailsAPiConstants.failure:
          return productItemDetailsFailureView()

  }
  
}


  return (
    <div>{renderProductItemDetails()}</div>
  )
}

export default ProductItemDetails