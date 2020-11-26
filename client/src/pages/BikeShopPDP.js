import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, Button, Card } from 'react-bootstrap';
import Map from '../components/Map';
import BikeShopCard from '../components/BikeShopCard';
import Review from '../components/Review';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BikeShopPDP = ({ match, history }) => {
  const { setBikeshop, bikeshop } = useContext(AppContext);
  const id = match.params.id;

  useEffect(() => {
    axios
      .get(`/api/bikeshop/find/${id}`, { withCredentials: true })
      .then(({ data }) => {
        setBikeshop(data);
      });
  }, []);

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Map />
        <BikeShopCard bikeshop={bikeshop} />
        <div className="review">
          <hr
            style={{
              color: '#ec4568',
              background: '#ec4568',
              height: 0.5,
              width: '50%',
              border: '0.5px solid #ec4568'
            }}
          />
          <Review bikeshop={bikeshop} />
        </div>
        <Button
          className="btn-pink-lg-lng"
          onClick={() => history.push(`/repairs/${bikeshop?._id}`)}
        >
          Select Repairs
        </Button>

        <Link className="mt-4 shoplistLink" to="/Shoplist">
          Back to Bike Shop List
        </Link>
      </Container>
    </>
  );
};

export default BikeShopPDP;
