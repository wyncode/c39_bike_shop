import React from 'react';
import { Container, Button, ProgressBar } from 'react-bootstrap';
import Calendar from '../components/Calendar';

const Appointment = () => {
  return (
    <div>
      <ProgressBar now={33}></ProgressBar>
      <Container>
        <h1>The Miami Bike Shop</h1>
        <h1>Select a date</h1>
      </Container>
      <Container>
        <Calendar />
      </Container>
      <Container>
        <Button className="btn-pink-lg" size="lg" block>
          {' '}
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default Appointment;
