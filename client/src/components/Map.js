import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl';
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
      center={[-80.1918, 25.7617]}
    >
      <Marker coordinates={[-80.1918, 25.7617]} className="marker">
        <img className="marker-icon" />
      </Marker>
      <ZoomControl />
    </MapBox>
  );
};

export default Map;
