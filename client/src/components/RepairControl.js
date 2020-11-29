import React, { useState, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/repairs.css';
import Orders from './Orders';
import ProgressBar from './ProgressBar';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import axios from 'axios';

const RepairControl = ({ match }) => {
  const [progress, setProgress] = useState('false');
  const [isActive, setActive] = useState('false');
  const [formData, setFormData] = useState(null);
  const { order, setOrder } = useContext(AppContext);

  const id = match.params.id;

  const handleToggle = (val) => {
    setActive(!isActive);
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/order/${id}`, formData);
      setOrder(response.data);
      swal('Congrats! You have won this stage of the tour!');
    } catch (error) {
      swal('You made no progress! Turn around and try again!');
    }
  };

  // const setProgress = (val) => {
  //   setFormData({ ...FormData, progress: val });
  // };

  return (
    <Container>
      <h1> Repairs Control</h1>
      <Orders order={order} />
      <p>Insert description here </p>
      <ProgressBar className={isActive ? 'tracker 1' || 'tracker2' : ''} />
      <hr className="pink-line-page-break" />
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleToggle}
        onClick={() => setProgress(true)}
      >
        Received
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleToggle}
        onClick={() => setProgress(true)}
      >
        Diagnosed
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleToggle}
        onClick={() => setProgress(true)}
      >
        Parts Ordered
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleToggle}
        onClick={() => setProgress(true)}
      >
        Repair in progress
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleToggle}
        onClick={() => setProgress(true)}
      >
        Delayed
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleToggle}
        onClick={() => setProgress(true)}
      >
        Ready for pick up
      </Button>
    </Container>
  );
};

export default RepairControl;
