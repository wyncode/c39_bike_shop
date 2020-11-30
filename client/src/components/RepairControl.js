import React, { useState, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/repairs.css';
import Orders from './Orders';
import ProgressBarContainer from './ProgressBar';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import axios from 'axios';

const RepairControl = () => {
  const [formData, setFormData] = useState(null);
  const { order, setLoading } = useContext(AppContext);
  const [now, setProgress] = useState(0);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const handleClick = () => {
    setProgress(now < 100 ? now + 20 : 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const progress = e.target.elements.progress.value;
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `/api/order/${order._id}`,
        { progress },
        { withCredentials: true }
      );
      setProgress([data]);
      swal('Congrats! You have won this stage of the tour!');
    } catch (error) {
      swal('You made no progress! Turn around and try again!');
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      <ProgressBarContainer now={now} />
      <Orders order={order} />
      <hr className="pink-line-page-break" />
      <Button
        className="btn-pink-lg-lng mb-2"
        onChange={handleChange}
        onClick={handleClick}
      >
        Received
      </Button>
      <Button
        className="btn-pink-lg-lng mb-2"
        onChange={handleChange}
        onClick={handleClick}
      >
        Diagnosed
      </Button>
      <Button
        className="btn-pink-lg-lng mb-2"
        onChange={handleChange}
        onClick={handleClick}
      >
        Parts Ordered
      </Button>
      <Button
        className="btn-pink-lg-lng mb-2"
        onChange={handleChange}
        onClick={handleClick}
      >
        Repair in progress
      </Button>
      <Button
        className="btn-pink-lg-lng mb-2"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleClick}
      >
        Delayed
      </Button>
      <Button
        className="btn-pink-lg-lng mb-2"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={handleClick}
      >
        Ready for pick up
      </Button>
    </Container>
  );
};

export default RepairControl;
