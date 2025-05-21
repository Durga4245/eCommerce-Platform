import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

import './index.css'

const FiltereSideBar = (props) => {

  // const [isCategoryActive,setIsCategoryActive] = useState(false)
  const [activeCategoryId, setActiveCategoryId] = useState('');


    const {searchInput,onSearchInput,categoryOptions,setCategoryId,ratingsList,setRatingId} = props

    const onCategoryClick = (id)=>{

     
     
    //  const selectedCategory =  categoryOptions.some((each)=>(
    //     each.id===id
    //   ))
      setCategoryId(id)

      setActiveCategoryId(id)
    
     
    }

    const onClearFilter=()=>{

        setCategoryId("")
        setActiveCategoryId("")
        setRatingId("")
    }

    const onRatingFilter = (ratingId)=>{

      setRatingId(ratingId)
     


    }


  return (
     <div className="filters-container">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                onChange={onSearchInput}
                type="search"
                placeholder="Search..."
                value={searchInput}
                className="search-input"
              />
            </div>
            <ul className="categories_container">
              <li className="catogoryHeading">Category</li>
              {categoryOptions.map(category=>(
                <li className={activeCategoryId===category.categoryId?"selectedCategory":"CategoryListItems"} onClick={()=>onCategoryClick(category.categoryId)} key={category.categoryId}> {category.name}</li>
              ))}
              {/* <li>Clothing</li>
              <li>Electronics</li>
              <li>Appliances</li>
              <li>Grocery</li>
              <li>Toys</li> */}

              <li className="RatingHeading">Rating</li>

              {ratingsList.map(rating=>(
                <li onClick={()=>{onRatingFilter(rating.ratingId)}} key={rating.ratingId}> {<img className='ratingImage' src={rating.imageUrl} alt="Rating"/>} </li>
              ))}
              {/* <li>
                <Rating rating={4} />
              </li>
              <li>
                <Rating rating={3} />
              </li>
              <li>
                <Rating rating={2} />{" "}
              </li>
              <li>
                <Rating rating={1} />
              </li> */}
            </ul>
            <button onClick={onClearFilter}  className="filterButton" type="button">
              Clear Filter
            </button>
          </div>
  )
}


export default React.memo(FiltereSideBar);