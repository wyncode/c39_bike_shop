import React from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import '../components/styles/shoplist.css';

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_API_KEY
});

const Map = () => {
  return (
    <MapBox
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: '600px',
        width: '850px'
      }}
    >
      <ZoomControl />
    </MapBox>
  );
};

export default Map;
