import React from 'react';

import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl';
import '../components/styles/shoplist.css';

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoidGVsZXZpbmUiLCJhIjoiY2tnYTQ5MnJrMDNpZTJ6b2puZGJxZ21qZCJ9.Euhc3Q37uKKWBj6wlq3uSg'
});

const Map = () => {
  return (
    <MapBox
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: '600px',
        width: '850px'
      }}
      center={[-80.1918, 25.7617]}
    >
      <Marker coordinates={[-80.1918, 25.7617]} className="marker">
        <img className="marker-icon" />
      </Marker>
      <ZoomControl />

  );
};

export default Map;
