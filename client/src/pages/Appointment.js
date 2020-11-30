import React, { useContext } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import Calendar from '../components/Calendar';
import { AppContext } from '../context/AppContext';
import '../components/styles/appointment.css';

const Appointment = () => {
  const { order } = useContext(AppContext);

  return (
    <div>
      <Image
        src="https://i.imgur.com/dFUTb3p.png"
        className="progress-gear"
      ></Image>
      <Container>
        <h1 className="title">The =Bike Shop</h1>
        <h1 className="select">Select a date</h1>
      </Container>
      <Container>
        <Calendar />
      </Container>
      <Container>
        <Button className="btn-pink-lg" href="/summary">
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default Appointment;
