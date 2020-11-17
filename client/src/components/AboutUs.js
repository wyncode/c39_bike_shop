import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function AboutUs() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <p>A place to repair your two wheels with ease in a efficient way!</p>
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
      </Container>
    </React.Fragment>
  );
}
