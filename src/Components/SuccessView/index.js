import ProductItem from "../ProductItem";
import { useMemo } from "react";
import './index.css'

const SuccessView = (props) => {

    const {sortOption,onchangeSortOption,productsData} = props

     const memoizedProductsList = useMemo(() => {
    return productsData.data.map((product) => (
      <ProductItem key={product.id} primeProductDetails={product} />
    ));
  }, [productsData.data]);
   
    return (
      <>
          <div className="products-container">
            <div className="productsHeader">
              <h1> Products </h1>
              <div>
                <span> Price </span>
                <select value={sortOption} onChange={onchangeSortOption}>
                  <option value="PRICE_LOW"> Low-High </option>
                  <option value="PRICE_HIGH"> High-Low </option>
                </select>
              </div>
            </div>

             {productsData.data.length === 0 ?(

              <div className="no-results-container">
                  <p className="no-results">No Results Found</p>
                </div>): (
            <ul className="Product_Items_Container">
              {memoizedProductsList}
                </ul>
              )}
            
          </div>
     
      </>
    );
  };


  export default SuccessView