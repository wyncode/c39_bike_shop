import React, { useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, Button } from 'react-bootstrap';
import Map from '../components/Map';
import BikeShopCard from '../components/BikeShopCard';
import { Link } from 'react-router-dom';
import ShopInfo from '../components/ShopInfo';
import axios from 'axios';

const BikeShopPDP = ({ match, history }) => {
  const { setBikeshop, bikeshop } = useContext(AppContext);
  const id = match.params.id;
  useEffect(() => {
    axios
      .get(`/api/bikeshop/find/${id}`, { withCredentials: true })
      .then(({ data }) => {
        console.log(data);
        setBikeshop(data);
      });
  }, []);
  return (
    <Container>
      <Map />
      <BikeShopCard />
      <ShopInfo bikeshop={bikeshop} />
      <Container>
        <Button
          className="btn-pink-lg"
          onClick={() => history.push(`/repairs/${bikeshop._id}`)}
        >
          Select Repairs
        </Button>
      </Container>
      <Container>
        <Link className="mt-4" to="/Shoplist">
          Back to Bike Shop List
        </Link>
      </Container>
    </Container>
  );
};

export default BikeShopPDP;
