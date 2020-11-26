import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ShopInfo = ({ bikeshop }) => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{bikeshop?.shopName}</Card.Title>
            <Card.Text>
              Pop-up bicycle rights polaroid kickstarter intelligentsia cray, +1
              artisan hoodie selfies biodiesel church-key blog taxidermy
              waistcoat. Snackwave wayfarers knausgaard, live-edge taiyaki
              pickled four dollar toast VHS jianbing next level pop-up whatever
              humblebrag. Knausgaard bitters meh skateboard tote bag af. Subway
              tile squid sriracha chicharrones VHS kitsch.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ShopInfo;
