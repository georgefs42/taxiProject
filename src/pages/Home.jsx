import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString()); // Convert to string before storing
    setVisitorCount(newCount);
  }, []);

  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="../images/Taxi_1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../images/Taxi_2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../images/Taxi_3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <Row className="text-center my-5">
        <Col>
          <h2>Welcome to our company!</h2>
          <p>We are dedicated to providing the best services to our customers.</p>
        </Col>
      </Row>

      <Row className="text-center my-4">
        <Col>
          <h4>Total Visitors: {visitorCount}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
