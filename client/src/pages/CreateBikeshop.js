import React, { useState, useContext } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';

const CreateBikeshop = ({ history }) => {
  const { setCurrentUser, setBikeshop, bikeshop, currentUser } = useContext(
    AppContext
  );
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const bikeshopData = new FormData();
      // this information is not append information
      bikeshopData.append('shopName', formData.shopName);
      bikeshopData.append('email', formData.email);
      bikeshopData.append('phone', formData.phone);
      bikeshopData.append('logo', formData.logo);
      bikeshopData.append('website', formData.website);
      bikeshopData.append('email', formData.email);
      bikeshopData.append('street', formData.shopContact.street);
      bikeshopData.append('city', formData.shopContact.city);
      bikeshopData.append('state', formData.shopContact.state);
      bikeshopData.append('street', formData.shopContact.zipcode);
      const updatedBikeshop = await axios({
        method: 'POST',
        url: `/api/bikeshop`,
        withCredentials: true,
        bikeshopData
      });
      console.log(updatedBikeshop.data);
      setBikeshop(updatedBikeshop.data);
      history.push('/');
      swal('Start your store!');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
    console.log(bikeshop);
  };

  return (
    <Container
      className="ds-flex justify-content-center align-items-center"
      width="700px"
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>Create Your Bikeshop Profile</h1>
        <Image src="https://imgur.com/tAuaIZp.png" height="200px" />
      </div>
      <Form onSubmit={handleCreate} className="d-flex flex-column">
        <Form.Group>
          <Form.File
            id="exampleFormControlFile1"
            label="Upload your logo"
            name="logo"
            onChange={handleImageSelect}
          />
        </Form.Group>
        <Form.Group controlId="formBasic">
          <Form.Label>What is your shop's name?</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter your shop name."
            size="lg"
            name="shopName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>What is your phone number?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            size="lg"
            name="phone"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>
            If you have store email, please enter it below
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email here "
            size="lg"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>
            If you have store has a website, please enter it below
          </Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter Website Here"
            size="lg"
            name="website"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your store address</Form.Label>
          <Form.Row>
            <Form.Control
              type="text"
              placeholder="street"
              name="street"
              onChange={handleChange}
            />
            <Form.Control
              type="text"
              placeholder="city"
              name="city"
              onChange={handleChange}
            />
            <Form.Control
              type="text"
              placeholder="state"
              name="state"
              onChange={handleChange}
            />
            <Form.Control
              type="text"
              placeholder="zipCode"
              name="zipCode"
              onChange={handleChange}
            />
          </Form.Row>
        </Form.Group>

        <Button
          type="submit"
          className="btn-pink-sm m-auto"
          onClick={() => {
            history.push('/Shoplist');
          }}
        >
          Finished
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBikeshop;
