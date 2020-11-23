import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Orders = () => {
  return (
    <div class="d-flex justify-content-center">
      <Card style={{ width: '80vw' }}>
        <ListGroup variant="flush">
          <Link>
            <ListGroup.Item>Traci Levine #4444</ListGroup.Item>
          </Link>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Orders;
