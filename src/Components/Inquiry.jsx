import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Inquiry extends Component {
  render() {
    return (
      <div style={{ fontSize: "20px" }}>
        <Container>
          <div style={{ textAlign: "justify" }}>
            <h3>Custom Simulation Tool Inquiry</h3>
            Share the specific challenge you want to address, along with your
            email, and we’ll provide the information you need! [Form: Problem
            Description, Email]
            <ul>
              <li>
                <h5> Fluid-Structure Interaction (FSI)</h5>
                FSI problems are at the core of many aerospace and engineering
                challenges. Our expertise in FSI simulation helps optimize the
                interaction between fluids and structural components, providing
                critical insights into stress, deformation, and performance
                across a wide variety of applications.
              </li>
              <li>
                <h5>Fire Dynamics Simulation (FDS)</h5>
                Our FDS solutions help industries predict and analyze fire
                behaviors, assess safety measures, and model evacuation
                scenarios. This service is particularly relevant for civil
                engineering, aerospace, and manufacturing sectors, ensuring that
                safety protocols are built on reliable and accurate simulation
                data.
              </li>
              <li>
                <h5>Battery and Energy Systems Simulation</h5>
                As the need for efficient, high-performance batteries grows, AAL
                offers simulation services to evaluate battery performance,
                degradation, and thermal behavior. These simulations help
                developers optimize designs for electric vehicles, UAVs, and
                other high-demand energy systems.
              </li>
              <li>
                <h4>General CFD Services</h4>
                We provide CFD simulations for a variety of fluid dynamics
                challenges, from aerodynamic optimization to thermal management
                and HVAC systems. Our tools and expertise ensure that clients
                can address their most complex engineering problems with
                confidence.
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}
