import React from "react";
import { number } from "prop-types";

const Stars = ({ rating }) => {
  return (
    <div className="stars">
      <div className="rating">
        <div className="rating-upper" style={{ width: `${rating * 2}%` }}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div className="rating-lower">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <span className="rating-value">{(rating / 10).toFixed(1)}</span>
      </div>
    </div>
  );
};

Stars.propTypes = {
  rating: number.isRequired,
};

export default Stars;
