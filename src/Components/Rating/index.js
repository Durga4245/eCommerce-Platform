import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Font Awesome stars
import './index.css'

const Rating = ({ rating }) => {
  // Array to store the stars
  const stars = [];

  // Push blue (filled) stars
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="bluestar" />);
  }

  // Push white (empty) stars for the rest of the rating (out of 5)
  for (let i = rating; i < 5; i++) {
    stars.push(<FaRegStar key={i} className="empty-star"/>);
  }

  return (
    <div className="rating-container">
      
      <div className="stars">{stars}</div>
    </div>
  );
};

export default Rating;
