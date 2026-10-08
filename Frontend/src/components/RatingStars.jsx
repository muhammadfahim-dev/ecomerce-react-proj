import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function RatingStars({ rating }) {
  let totalStars = 5;

  return (
    <div className="flex gap-1 items-center">
      {[...Array(totalStars)].map((_, index) => {
        let starValue = index + 1;

        if (rating >= starValue) {
          return <FaStar key={index} className="text-yellow-500" size={10} />;
        } else if (rating >= starValue - 0.5) {
          return (
            <FaStarHalfAlt key={index} className="text-yellow-500" size={10} />
          );
        } else {
          return <FaRegStar key={index} className="text-gray-500" size={10} />;
        }
      })}
    </div>
  );
}

export default RatingStars;
