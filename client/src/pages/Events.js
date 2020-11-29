import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';

const Events = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'GET',
        url: '/api/events'
      }).then((response) => {
        setApiData(response.data);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      {apiData &&
        apiData.map((event) => {
          return <EventCard key={event._id} id={event._id} event={event} />;
        })}
    </div>
  );
};

export default Events;
