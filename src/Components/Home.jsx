import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "./aalCarousel";
import About from "./Aboutus";
export default class Home extends Component {
  render() {
    return (
      <div style={{ fontSize: "22px" }}>
        <Container></Container>
        <Carousel />
        <About />
      </div>
    );
  }
}
