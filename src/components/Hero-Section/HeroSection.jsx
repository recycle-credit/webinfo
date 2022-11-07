import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/recycle-hero.png";
import  apple  from "../../assests/images/apple.svg";
import  google  from "../../assests/images/google.svg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere Learn on your Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut saepe voluptatum <br /> earum delectus deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div> */}
            <div className="app">
              <img src={apple} alt="google_play" className="apple" />
              <img src={google} alt="google_play" className="google" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
