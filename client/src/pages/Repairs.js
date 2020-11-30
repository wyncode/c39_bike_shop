import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Image } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import RepairSelection from '../components/RepairSelection';
import '../components/styles/repairs.css';

const Repairs = ({ history, match }) => {
  const { bikeshop, setBikeshop, currentUser, setOrder } = useContext(
    AppContext
  );
  const [selectedRepairs, setSelectedRepairs] = useState([]);

  const createOrder = async () => {
    const body = {
      bikeshop: bikeshop._id,
      cyclist: currentUser.cyclist._id,
      repairs: selectedRepairs
    };

    try {
      const { data } = await axios.post('/api/order', body, {
        withCredentials: true
      });
      setOrder(data);

      history.push('/appointment');
    } catch (error) {
      console.log(error);
    }
  };

  const handleRepairSelections = (repairId) => {
    let newRepairs = selectedRepairs;
    if (selectedRepairs.includes(repairId)) {
      newRepairs = selectedRepairs.filter((id) => id !== repairId);
    } else {
      newRepairs = [...selectedRepairs, repairId];
    }
    setSelectedRepairs(newRepairs);
  };

  const { id } = match.params;

  useEffect(() => {
    if (bikeshop) {
      return;
    }

    axios
      .get(`/api/bikeshop/find/${id}`, { withCredentials: true })
      .then((response) => {
        setBikeshop(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="appName">The Bike Shop</h1>
        <Image
          src="https://imgur.com/wE9rGJ8.png"
          className="mt-5 mb-5 bicycleImage"
        />
        <h2>Select your repairs</h2>

        {(bikeshop?.repairs || []).map((repair) => (
          <RepairSelection
            selectedRepairs={selectedRepairs}
            handleRepairSelections={handleRepairSelections}
            key={repair._id}
            repair={repair}
          />
        ))}

        <Container className="mt-5 d-flex flex-column align-items-center justify-content-center">
          <Button className="btn-pink-xlg" block onClick={createOrder}>
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
