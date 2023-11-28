import React, { useState } from "react";

import Star from "./Star";

const StarRating = () => {
  // Initialize a 'courseRating' state

  const [courseRating, setCourseRating] = useState(0);

  // Write a function that returns 5 Star components


  //An array of JSX tags, bc React would not allow this for loop in the final return below
  function renderStars() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star 
        isSelected={ courseRating > i }
        setRating={() => handleSetRating(i+1)}
        key={"id"} />);
    }
    return stars;
  }

  // Write an event handler that updates the courseRating state.

  // Pass the function to a Star component via props

  const handleSetRating = (rating) => {
    if (courseRating === rating) {
        setCourseRating(0);
    } else {
        setCourseRating(rating);
    }
    setCourseRating(rating)
  }

  return (
    <ul className="course--stars">
      {/* Render the Star components */}
      {renderStars()}
    </ul>
  );
};

export default StarRating;
