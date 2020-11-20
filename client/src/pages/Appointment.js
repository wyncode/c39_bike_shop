import React from 'react';
import { Container } from 'react-bootstrap';
import Calendar from '../components/Calendar';

const Appointment = () => {
  return (
    <div>
      <Container>
        <Calendar />
      </Container>
    </div>
  );
};

export default Appointment;
