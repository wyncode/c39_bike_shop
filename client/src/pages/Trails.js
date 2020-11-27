import React from 'react';
import '../components/styles/subpages.css';
import { Container, Card } from 'react-bootstrap';

const Trails = () => {
  return (
    <Container>
      <div>
        <div className="d-flex flex-column align-items-center">
          <h1 className="title">Trails</h1>
          <div
            class="TrailforksTrailList"
            data-w="600px"
            data-h="600px"
            data-rid="3143"
            data-displaytype="table"
            data-activitytype="1"
            data-unsanctioned="0"
            data-query=""
          ></div>
          powered by <a href="https://www.trailforks.com/">Trailforks.com</a>
        </div>
        <Card className="d-flex flex-column align-items-center">
          <h1 className="title">Routes</h1>
          <div
            class="TrailforksWidgetRoute"
            data-w="100%"
            data-h="505px"
            data-id="2440"
            data-activitytype="1"
            data-map="1"
            data-elevation="1"
            data-trails="1"
            data-details="1"
            data-section="0"
            data-units="metric"
          ></div>
          <a href="https://www.trailforks.com/">Trailforks.com</a>
        </Card>
      </div>
    </Container>
  );
};

export default Trails;
