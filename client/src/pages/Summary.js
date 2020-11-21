import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Card, ListGroup, Button } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';
import '../components/styles/summary.css';

const Summary = () => {
  return (
    <div>
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
        <Card.Text>
          Lumbersexual gochujang tbh, venmo kogi 90's four dollar toast
          gluten-free portland. Heirloom shoreditch four dollar toast
          typewriter, craft beer franzen glossier bitters brunch raw denim
          williamsburg edison bulb church-key. Semiotics distillery raclette,
          tbh cray ethical meh DIY mumblecore health goth. Palo santo waistcoat
          prism art party vinyl glossier man bun, subway tile squid
          farm-to-table pour-over. Selvage master cleanse 8-bit kitsch
          shoreditch woke.
        </Card.Text>

        <Button className="btn-pink-lg">Create account</Button>
        <Card.Text className="instructions">
          Create an account in order to track the bike repair progress.
        </Card.Text>
        <Link to="/Repairs">Edit Repairs</Link>
      </Card>
    </div>
  );
};

export default Summary;
