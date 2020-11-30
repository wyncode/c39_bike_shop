import React from 'react';
import Orders from '../components/Orders';
import '../components/styles/ownerorderlist.css';
import { Container, Form } from 'react-bootstrap';
import BikeShopCard from '../components/BikeShopCard';
import { Link } from 'react-router-dom';

const ShopOwner = () => {
  const handleSearch = () => {};
  return (
    <Container>
      <BikeShopCard />
      <h1 class="d-flex justify-content-center">Welcome</h1>
      <Form>
        <Form.Control
          onChange={handleSearch}
          type="text"
          placeholder="Search Orders"
          size="lg"
          name="name"
        />
      </Form>
      <h1>Open Orders</h1>
      <Link to="/repairscontrol">
        <Orders />
      </Link>
      <h1>Closed Orders</h1>
      <Orders />
    </Container>
  );
};

export default ShopOwner;
