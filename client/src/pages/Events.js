import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Card } from 'react-bootstrap';

const Events = () => {
  const [search, setSearch] = useState('');
  const [apiData, setApiData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target.elements.searchbar.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        `http://www.BikeReg.com/api/search/${search}`
      );

      setApiData(response.data);
    };
    fetchData();
  }, [search]);

  console.log(apiData);

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ margin: '2rem' }}>
        <Form.Row>
          <Form.Control
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Search for something!"
          ></Form.Control>
        </Form.Row>
      </Form>

      <Card></Card>
    </div>
  );
};

export default Events;
