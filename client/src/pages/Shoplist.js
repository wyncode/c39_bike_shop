import React, { useContext, useEffect } from 'react';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import BikeShopCard from '../components/BikeShopCard';
import swal from 'sweetalert';

const Shoplist = ({ latitude, longitude }) => {
  const { setBikeshops, search, loading, bikeshops, setSearch } = useContext(
    AppContext
  );
  const filteredBikeshops = bikeshops.filter((bikeshop) => {
    return bikeshop?.shopContact.zipCode.includes(search);
  });

  const handleSearch = async (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get('/api/bikeshop/')
      .then((response) => {
        setBikeshops(response.data);
      })
      .catch((error) => {
        swal(`You hit the Deck! `, 'Something went wrong.');
      });
  }, [loading]);

  return (
    <div>
      <Container>
        <Card>
          <Card.Text className="srch-hdr">Select your Bike Shop:</Card.Text>
          <SearchBar handleSearchProp={handleSearch} loading={loading} />
        </Card>
        <Map />

        <Card>
          <Card.Title className="fltr-txt">Filter By</Card.Title>
        </Card>
        {filteredBikeshops?.map((bikeshop) => {
          return <BikeShopCard bikeshop={bikeshop} key={bikeshop._id} />;
        })}

        <Footer />
      </Container>
    </div>
  );
};

export default Shoplist;
