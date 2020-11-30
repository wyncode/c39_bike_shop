import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Form, Button, Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const AddRepairs = () => {
  const [formData, setFormData] = useState(null);
  const { bikeshop, setBikeshop } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`/api/bikeshop/me`, { withCredentials: true })
      .then(({ data }) => {
        setBikeshop(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        url: `/api/repair`,
        withCredentials: true,
        body: formData
      });

      swal('Success! Repair has been added!');
      setFormData(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form className="d-flex flex-column align-items-center">
        <h1>Please add all repairs that you offer! </h1>
        <h4>
          Click the finished button once you have added all the repairs you
          would like.
        </h4>
        <Form.Label>Repair Name</Form.Label>
        <Form.Control type="text" name="repair" onChange={handleChange} />
        <Form.Label>Repair Description</Form.Label>
        <Form.Control
          type="text-area"
          name="description"
          onChange={handleChange}
        />
        <Form.Label>Repair Price</Form.Label>
        <Form.Control type="text" name="price" onChange={handleChange} />
        <Form.Label>Estimated Time To Fix</Form.Label>
        <Form.Control type="text" name="averagetime" onChange={handleChange} />
        <Form.Label>Sameday Available</Form.Label>
        <Form.Check
          type="checkbox"
          label="Sameday?"
          name="sameday"
          onChange={handleChange}
        />
        <Button className="btn-pink-sm-sq mb-3" onSubmit={handleSubmit}>
          Add Another Repair
        </Button>
        <Link to="/">
          <Button className="btn-pink-lg-lng">Finish</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default AddRepairs;
