import React from 'react';

const Review = ({ reviews }) => {
  const total = review.length;

  return (
    <div>
      <div className="reviewsHeader">
        <div className="stars">
          <img src={require('../images/stars.png')} alt="reviews" />
          {total === 1 ? `${total} Review` : `${total} Reviews`}
        </div>
        <button className="button"> + Review</button>
      </div>
      <ul>
        {reviews?.map((review) => (
          <li key={review._id} className="list">
            <div>
              <p className="stars">
                <img src={'#'} alt="reviews" />
                {review.rating}
              </p>
              <p>{review.review}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
