import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share';
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
          <Button className="btn-pink-sm ml-2" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <Container className="d-flex justify-content-center">
        <FacebookShareButton url={`yourpageurl`}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton url={`yourpageurl`}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <EmailShareButton url={`yourpageurl`}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </Container>
      <Container className="d-flex justify-content-center ">
        <Link className="ft-link">About Us</Link>
        <Link className="ft-link">Trails</Link>
        <Link className="ft-link">Events</Link>
        <Link className="ft-link">Bike Shops</Link>
      </Container>
    </Container>
  );
};

export default Footer;
