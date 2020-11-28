import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import '../components/styles/aboutus.css';

const AboutUs = () => {
  return (
    <Container className="aboutus">
      <h1>About Us</h1>
      <CardDeck className="aboutus">
        <Card className="aboutuscard">
          <Container className="aboutuspic">
            <Card.Img
              variant="top"
              className="img"
              src="https://i.imgur.com/7EqArky.jpeg"
            />
          </Container>
          <Card.Title>Traci Levine</Card.Title>
          <Card.Text>
            Traci is an avid passionate cyclist who enjoys long rides on
            Pinetree Drive. She is passionate about web development and wants to
            create an app for all cyclist.
          </Card.Text>
        </Card>
        <Card className="aboutuscard">
          <Container className="aboutuspic">
            <Card.Img
              className="img"
              variant="top"
              src="https://imgur.com/LtAHycg.png"
            />
          </Container>
          <Card.Title>Danny Nieves</Card.Title>
          <Card.Text>
            As a Full-Stack Web Developer, Danny has been able to draw from his
            background in Hospitality Management and his passion for cycling to
            help collaborate on an application to connect cyclists to repairs
            with an ease of access they never had before.
          </Card.Text>
        </Card>
        <Card className="aboutuscard">
          <Container className="aboutuspic">
            <Card.Img
              className="img"
              variant="top"
              src="https://i.imgur.com/gPUcWnT.jpg?1"
            />
          </Container>
          <Card.Title>JP Castrillon</Card.Title>
          <Card.Text>
            JP is passionate about riding his bikes. He was once quoted, "the
            best code I've wrote, have come after a long bike ride.".
          </Card.Text>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default AboutUs;
