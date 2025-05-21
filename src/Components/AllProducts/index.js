import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";
import SuccessView from '../SuccessView'
import FiltereSideBar from "../FiltereSideBar";
import "./index.css";

// import ProductItem = ''

const apiConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]


const AllProducts = () => {
  const [sortOption, setSortOption] = useState("PRICE_HIGH");
  const [searchInput, setSearchInput] = useState("");
  const [categoryId,setCategoryId] = useState("");
  const [ratingId,setRatingId] = useState("");

  const [productsData, setProductsData] = useState({
    status: apiConstants.initial,
    data: null,
    error: null,
  });

  useEffect(() => {
    setProductsData((prevState) => ({
      ...prevState,
      status: apiConstants.inProgress,
    }));

    const jwtToken = Cookies.get("jwt_Token");

    const url = `https://apis.ccbp.in/products?sort_by=${sortOption}&category=${categoryId}&title_search=${searchInput}&rating=${ratingId}`;
    
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const getProducts = async () => {
      const response = await fetch(url, options);

      try {
        if (response.ok === true) {
          const productsData = await response.json();

        


          const formattedData = productsData.products.map((product) => ({
            brand: product.brand,
            id: product.id,
            imgUrl: product.image_url,
            price: product.price,
            rating: product.rating,
            title: product.title,
          }));

          setProductsData((prevState) => ({
            ...prevState,
            data: formattedData,
            status: apiConstants.success,
          }));
        } else {
          setProductsData((prevState) => ({
            ...prevState,
            status: apiConstants.failure,
          }));
        }
      } catch (error) {
        setProductsData((prevState) => ({
          ...prevState,
          status: apiConstants.failure,
          error: error.message,
        }));
      }
    };

    getProducts();
  }, [sortOption,searchInput,categoryId,ratingId]);

   const onchangeSortOption = (event) => {
      setSortOption(event.target.value);
    };

    const onSearchInput = (event) => {
      setSearchInput(event.target.value);
     
    };

  const loadingView = () => {
    return (
      <div className="spinner">
        <div>
          <TailSpin
            height={50}
            width={50}
            color="#4fa94d"
            ariaLabel="loading"
          />
        </div>
      </div>
    );
  };

  

  const failureView = () => {

    return <p>Page Not Found</p>

  };

  const renderedOutput = () => {
    const { status } = productsData;
    switch (status) {
      case apiConstants.inProgress:
        return loadingView();

      case apiConstants.success:
        return  <SuccessView productsData={productsData} sortOption={sortOption} onchangeSortOption={onchangeSortOption}/>
       

      case apiConstants.failure:
        return failureView();

      default:
        return null;
    }
  };

  return <div className="productsSections">
   
  <FiltereSideBar setRatingId={setRatingId} ratingsList={ratingsList} setCategoryId={setCategoryId} categoryOptions={categoryOptions} onSearchInput={onSearchInput}
          setSearchInput={setSearchInput} 
          searchInput={searchInput}/>
         
  
     {renderedOutput()}

  </div>
};

export default AllProducts;
