import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div style={{ fontSize: "20px" }}>
        <Container>
          <h3>About us</h3>
          Applied Aero Labs is dedicated to supporting innovation in advanced
          engineering solutions. Our products and services focus on providing
          reliable, high-performance tools for the development, testing, and
          certification of UAVs and other cutting-edge technologies. With
          expertise in both experimental testing and computational simulation,
          AAL serves industries ranging from aerospace to civil engineering,
          energy, and manufacturing. We believe in empowering companies with the
          tools they need to innovate, ensuring they stay ahead in an
          ever-evolving industry landscape.
          <br />
        </Container>
      </div>
    );
  }
}
