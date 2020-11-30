import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Bike = () => {
  const { fetchCurrentUser } = useContext(AppContext);

  return (
    <div>
      {fetchCurrentUser &&
        fetchCurrentUser.cyclist?.map((bike) => (
          <Card
            key={bike._id}
            className="d-flex flex-column align-items-center"
          >
            <Card.Title>{bike.bikeName}</Card.Title>
            <Card.Text>{bike.bikeModel}</Card.Text>
            <Card.Text>{bike.bikeType}</Card.Text>
          </Card>
        ))}
    </div>
  );
};

export default Bike;
