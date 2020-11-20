import React from 'react';
import { RepairPopUp } from '../components/RepairPopUp';
import { Button, Container } from 'react-bootstrap';
import FilterRepair from '../components/FilterRepair';
import RepairSelection from '../components/RepairSelection';
import { Link } from 'react-router-dom';
import '../components/styles/repairs.css';

const Repairs = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1>The Miami Bike Shop</h1>
      <FilterRepair />
      <RepairSelection />
      <Container className="mt-5">
        <Button className="d-flex justify-content-center" size="lg" block>
          {' '}
          Take in for diagnostic
        </Button>

        <h4 className="mt-5">Select a time and date for appoinment</h4>

        <Button className="dbtn-pink-lg" size="lg" block>
          {' '}
          Select Appointment
        </Button>
      </Container>
      <Link> Back to bike shop list</Link>
    </Container>
  );
};

export default Repairs;
