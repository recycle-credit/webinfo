import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <form className="subscribe" >
              <input type="email" placeholder="Email" style={{ backgroundColor: '#fff', color: '#000'}}/>
              <button className="btn" >Subscribe</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
