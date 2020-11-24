import React from 'react';
import { Tab, Row, Col, ListGroup, Container } from 'react-bootstrap';
import General from './General';
import Bicycles from './Bicycle';
import Review from './Review';
import './styles/profile.css';
import Order from './Order';

const SideBar = () => {
  return (
    <Container className="mt-5">
      <Tab.Container>
        <Row className="d-flex align-items-center justify-content-center ">
          <Col sm={10} className="md-3 pt-0">
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1" className="sidebar">
                General
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" className="sidebar">
                Orders
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" className="sidebar">
                Bicycles
              </ListGroup.Item>
              <ListGroup.Item action href="#link4" className="sidebar">
                Reviews
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <General />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Order />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Bicycles />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <Review />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default SideBar;
