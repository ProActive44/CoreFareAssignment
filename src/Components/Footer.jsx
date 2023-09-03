import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h4>Contact Me</h4>
            <p>Kopergaon, Maharashatra, India</p>
            <p>Email: prasadmhaske2001@gmail.com</p>
            <p>Phone: 9764584028</p>
          </Col>
          <Col md={4}>
            <h4>About Us</h4>
            <p>Know more</p>
            <p>Search here</p>
            <p>Find more</p>
          </Col>
          <Col md={4}>
            <h4>Copyright &copy; {new Date().getFullYear()}</h4>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
