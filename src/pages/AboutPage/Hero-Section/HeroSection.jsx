import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../assests/images/hero.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <div style={{ paddingTop: '5rem'}}>
        <h1 style={{ fontSize: '5rem', fontWeight: 700, textAlign: 'center', marginBottom: 100}}>
           About Us
        </h1>
    </div>
  );
};

export default HeroSection;
