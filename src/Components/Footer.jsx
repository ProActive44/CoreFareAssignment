import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contact Us</h4>
            <p>123 Main St, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
          <Col md={6}>
            <h4>Copyright &copy; {new Date().getFullYear()}</h4>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
