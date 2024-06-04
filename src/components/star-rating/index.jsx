import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const StarRating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function hanleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function hanleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      <br></br>
      <p>Give rating to your service</p>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            key={index}
            onClick={() => hanleClick(index)}
            onMouseOver={() => handleMouseEnter(index)}
            onMouseLeave={() => hanleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
