import React from 'react';
import { RepairPopUp } from '../components/RepairPopUp';
import { Button, Container } from 'react-bootstrap';
import RepairSelection from '../components/RepairSelection';
import { Link } from 'react-router-dom';
import '../components/styles/repairs.css';

const Repairs = () => {
  //fetching will happen her with useEffect and App Context

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        {/* this is whats mapped */}
        <RepairSelection />

        <Container className="mt-5 d-flex flex-column align-items-center justify-content-center">
          {/* send to appointment page */}
          <Button className="btn-pink-xlg" block>
            {' '}
            Select Appointment
          </Button>
        </Container>
        <Link
          className="mt-3 mb-5"
          style={{
            color: '#818181',
            textDecoration: 'underline',
            fontSize: '2vw'
          }}
          to="/shoplist"
        >
          {' '}
          Back to bike shop list
        </Link>
      </Container>
    </>
  );
};

export default Repairs;
