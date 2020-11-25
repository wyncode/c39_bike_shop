import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, ListGroup, Button, Container } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/summary.css';

const Summary = () => {
  return (
    <Container>
      <Image
        src="https://i.imgur.com/SwJrGN2.png"
        alt="Progress Bar"
        className="Progress-Gear"
      />
      <Card>
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
        <Card.Title className="dropoff">
          Please drop off your bicycle at
        </Card.Title>
        <Card.Text className="location">This Location</Card.Text>
      </Card>
      <BikeShopCard />
      <Card>
        <Card.Title className="instruction-header">
          Drop off instructions
        </Card.Title>
        <Card.Text className="instructions">
          Please bring your bicycles into the lobby and ask to speak with JP
          regarding your appointment.
        </Card.Text>

        <Button
          className="btn-pink-lg"
          style={{ width: '61vw', marginleft: 'auto', marginright: 'auto' }}
        >
          Create account
        </Button>
        <Card.Text className="cr-acc-desc">
          Create an account in order to track the bike repair progress.
        </Card.Text>
        <Link to="/Repairs" className="edit-link">
          Edit Repairs
        </Link>
      </Card>
    </Container>
  );
};

export default Summary;
