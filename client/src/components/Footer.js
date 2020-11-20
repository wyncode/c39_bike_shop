import React from 'react';
import { Form, Button, Container, Image } from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container className="d-flex  flex-column">
      <Form>
        <Form.Group className="d-flex" controlId="formBasicEmail">
          <Form.Control
            style={{ width: '61vw', display: 'inline-block' }}
            type="email"
            placeholder="Enter email"
          />
          <Button className="btn-pink-sm-sq ml-2" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <Container className="socialContainer">
        <div className="socialHolder">
          <FacebookShareButton url={`yourpageurl`}>
            <Image src="https://imgur.com/08OgolE.png" />
          </FacebookShareButton>
          <Link className="ft-link">About Us</Link>
        </div>

        <div className="socialHolder">
          <Link>
            <Image src="https://imgur.com/LC3p6Ye.png" />
          </Link>

          <Link className="ft-link">Trails</Link>
        </div>
        <div className="socialHolder">
          <TwitterShareButton url={`yourpageurl`}>
            <Image src="https://imgur.com/GcgKgv1.png" />
          </TwitterShareButton>
          <Link className="ft-link">Events</Link>
        </div>
        <div className="socialHolder">
          <Link>
            {' '}
            <Image src="https://imgur.com/Wv38VLb.png" />
          </Link>
          <Link className="ft-link">Bike Shops</Link>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
