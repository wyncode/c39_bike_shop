import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <div className="reviewsHeader"></div>
      <ul>
        {review?.map((review) => (
          <li key={review._id} className="list">
            <div>
              <p className="stars">{review.rating}</p>
              <p>{review.review}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
