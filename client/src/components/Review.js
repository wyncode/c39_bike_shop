import React, { useContext } from 'react';
import './styles/subpages.css';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Review = () => {
  const { bikeshop } = useContext(AppContext);

  return (
    <div>
      <div className="reviewsHeader"></div>

      {bikeshop &&
        bikeshop.reviews?.map((review) => (
          <Card key={review._id} className="list">
            <Rater
              rating={review.rating}
              interactive={false}
              color={'#00fff9'}
            />
            <p>{review.review}</p>
          </Card>
        ))}
    </div>
  );
};

export default Review;
