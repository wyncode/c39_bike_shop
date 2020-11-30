import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, ListGroup, Button, Container } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/summary.css';

const Summary = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Image
        src="https://i.imgur.com/SwJrGN2.png"
        alt="Progress Bar"
        className="Progress-Gear"
      />
      <Card className="d-flex flex-column align-items-center mt-2">
        <Card.Title className="summary-title">Repairs Requested</Card.Title>
        <Card.Text className="summary">
          Pop-up bicycle rights polaroid kickstarter intelligentsia cray, +1
          artisan hoodie selfies biodiesel church-key blog taxidermy waistcoat.
          Snackwave wayfarers knausgaard, live-edge taiyaki pickled four dollar
          toast VHS jianbing next level pop-up whatever humblebrag. Knausgaard
          bitters meh skateboard tote bag af. Subway tile squid sriracha
          chicharrones VHS kitsch.
        </Card.Text>
        <ListGroup variant="flush" className="repair-list">
          <ListGroup.Item>Inner Tube Replacement $12</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card>
        <Card.Title className="dropoff d-flex flex-column align-items-center">
          Please drop off your bicycle at: <br />
          Danny's Bike Shop
        </Card.Title>
      </Card>
      <Card>
        <Card.Title className="instruction-header">
          Drop off instructions
        </Card.Title>
        <Card.Text className="instructions">
          Please bring your bicycles into the lobby and ask to speak with JP
          regarding your appointment.
        </Card.Text>

        <Link to="/repairtracker">
          <Button
            className="btn-pink-lg"
            style={{ width: '61vw', marginleft: 'auto', marginright: 'auto' }}
          >
            Finished
          </Button>
        </Link>
        <Card.Text className="cr-acc-desc"></Card.Text>
      </Card>
    </Container>
  );
};

export default Summary;
