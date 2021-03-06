import React from 'react';
import HeroImage from '../components/HeroImage';
import InfoCards from '../components/InfoCards';
import FeaturedShops from '../components/FeaturedShops';
import Footer from '../components/Footer';
import '../components/styles/homepage.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Chat from '../components/Chat';

const Home = () => {
  return (
    <>
      <HeroImage />
      <InfoCards />
      <FeaturedShops />
      <Link className="mt-3 mb-5 text-center aboutus" to="/aboutus">
        About Us
      </Link>

      <Chat />
      <Form className="d-flex justify-content-center">
        <Form.Group className="d-flex" controlId="formBasicEmail">
          <Form.Control
            style={{ width: '61vw', display: 'inline-block' }}
            type="email"
            placeholder="Enter email"
          />
          <Button className="btn-pink-sm-sq ml-2" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>

      <Footer />
    </>
  );
};

export default Home;
