import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StartButton from './StartButton';

export default function Card() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Easily Track Your Bike Repairs</h1>
        <StartButton />
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
      </Container>
    </React.Fragment>
  );
}
