import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Image } from 'react-bootstrap';
import Logout from './Logout';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand
        style={{ fontFamily: 'Sarina', color: '#ec4568' }}
        as={Link}
        to="/"
      >
        <Image
          className="mr-4"
          src={'https://imgur.com/xZizVWI.png'}
          height={50}
          width={50}
          roundedCircle
        />
        The Bike Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-auto">
          <Nav.Item href="/shoplist" className="mr-5">
            Bike Shops
          </Nav.Item>

          <Nav.Item href="/community" className="mr-5">
            Community
          </Nav.Item>
          <Nav.Item href="/events" className="mr-5">
            Events
          </Nav.Item>
          <Nav.Item href="/trails" className="mr-5">
            Trails
          </Nav.Item>
          <Nav.Item href="/aboutus" className="mr-5">
            About Us
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Dropdown drop="down" className="mr-1">
              <Dropdown.Toggle variant="">
                <Image
                  src={'https://imgur.com/PCEcljZ.png'}
                  height={50}
                  width={50}
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
                <Logout />
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
