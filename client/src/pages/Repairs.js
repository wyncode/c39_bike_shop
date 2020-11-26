import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/styles/repairs.css';
import axios from 'axios';

const Repairs = ({ match }) => {
  //fetching will happen here with useEffect and App Context
  const { repair, setRepair, bikeshops, setBikeshops } = useContext(AppContext);
  //we need to get the context of the current bike shop.

  const { id } = match.params;
  // Filter out just repairs from bikeshop
  const repair = bikeshops.filter((bikeshop) => {
    return bikeshop?.repair;
  });

  // setRepair,
  // repair

  // const = async (e) => {
  //   setSearch(e.target.value);
  // const data = await fetch(`api/${repair}`);
  //   const response = await data.json()
  //   setRepairSelection(response);
  console.log(bikeshop);
  // fetching the repairs that are specific to the bikeshop
  // we are expecting the data from the bike shop.
  useEffect(() => {
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
        {/* //How can I pass the prop to the next pages */}
        console.log(repair);
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
