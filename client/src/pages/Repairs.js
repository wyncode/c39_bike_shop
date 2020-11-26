import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import RepairSelection from '../components/RepairSelection';
import '../components/styles/repairs.css';

const Repairs = ({ match }) => {
  //fetching will happen here with useEffect and App Context
  const { bikeshop, setBikeshop } = useContext(AppContext);
  //we need to get the context of the current bike shop.
  const { id } = match.params;

  useEffect(() => {
    if (bikeshop) {
      return;
    }

    axios
      .get(`/api/bikeshop/find/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setBikeshop(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        {/* // We are going to map through the filter repairs from id of the bike shop */}
        {(bikeshop?.repairs || []).map((repair) => (
          <RepairSelection key={repair._id} repair={repair} />
        ))}
        {/* //How can I pass the prop to the next pages */}
        {/* //How can I make the pop up function */}
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
