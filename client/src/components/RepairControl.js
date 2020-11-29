import React, { useState, useContext, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './styles/repairs.css';
import Orders from './Orders';
import ProgressBar from './ProgressBar';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import axios from 'axios';

const RepairControl = () => {
  const [formData, setFormData] = useState(null);
  const { order, setLoading } = useContext(AppContext);
  const [percentageRange, setProgress] = useState(0);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
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
      console.log(data);
      setProgress([data]);
      swal('Congrats! You have won this stage of the tour!');
    } catch (error) {
      swal('You made no progress! Turn around and try again!');
    }
    console.log(progress);
  };

  return (
    <Container>
      <h1> Repairs Control</h1>
      <Orders order={order} />
      <ProgressBar percentageRange={percentageRange} />
      <hr className="pink-line-page-break" />
      <Button
        className="btn-pink-lg-lng"
        onChange={handleChange}
        onClick={setProgress(percentRange < 100 ? percentRange + 20 : 100)}
      >
        Received
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onChange={handleChange}
        onClick={setProgress(percentRange < 100 ? percentRange + 20 : 100)}
      >
        Diagnosed
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onChange={handleChange}
        onClick={setProgress(percentRange < 100 ? percentRange + 20 : 100)}
      >
        Parts Ordered
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onChange={handleChange}
        onClick={setProgress(percentRange < 100 ? percentRange + 20 : 100)}
      >
        Repair in progress
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={setProgress(percentRange < 100 ? percentRange + 20 : 100)}
      >
        Delayed
      </Button>
      <Button
        className="btn-pink-lg-lng"
        onSubmit={handleSubmit}
        onChange={handleChange}
        onClick={() => setProgress(true)}
      >
        Ready for pick up
      </Button>
    </Container>
  );
};

export default RepairControl;
