import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container className="page-footer d-flex  flex-column">
      <Container className="socialContainer">
        <div className="socialHolder">
          <FacebookShareButton url={`yourpageurl`}>
            <Image className="socialImg" src="https://imgur.com/08OgolE.png" />
          </FacebookShareButton>
          <Link to="#">
            <Image className="socialImg" src="https://imgur.com/LC3p6Ye.png" />
          </Link>
          <TwitterShareButton url={`yourpageurl`}>
            <Image className="socialImg" src="https://imgur.com/GcgKgv1.png" />
          </TwitterShareButton>
          <Link to="#">
            <Image className="socialImg" src="https://imgur.com/Wv38VLb.png" />
          </Link>
        </div>
        <hr className="line" />
        <div className="linkHolder">
          <Link className="ft-link" to="#">
            About Us
          </Link>
          <Link className="ft-link" to="#">
            Trails
          </Link>
          <Link className="ft-link" to="#">
            Events
          </Link>
          <Link className="ft-link" to="/ShopList">
            Bike Shops
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
