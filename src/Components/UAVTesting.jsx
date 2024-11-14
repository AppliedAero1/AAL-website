import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class UavTesting extends Component {
  render() {
    return (
      <div style={{ fontSize: "20px" }}>
        <Container>
          <div style={{ textAlign: "justify" }}>
            <ul>
              <li>
                <h5> Fan Array Wind Tunnel (FAWT)</h5> Our FAWT is a
                state-of-the-art solution designed for the rigorous testing of
                unmanned aerial vehicles (UAVs) and micro aerial vehicles
                (MAVs). With its ability to generate complex, unsteady flow
                conditions, the tunnel provides a highly controlled environment
                for assessing flight stability, control systems, and aerodynamic
                behavior. This allows for comprehensive testing under real-world
                atmospheric conditions, supporting both design and testing
                purposes.
              </li>
              <p>
                **CALL FOR ACTION:{" "}
                <h5>Get your Wind Tunnel Consultation Today!</h5> Book a
                consultation to discover how our FAWT can meet your testing
                needs. [Form: Testing Inquiry, email]
              </p>
              <li>
                <h5> Robotic Arm for Dynamic Testing </h5>Our automated robotic
                arm offers precision testing capabilities for drones, allowing
                detailed aerodynamic and structural analysis. This system can
                simulate various in-flight conditions, enabling clients to
                validate performance metrics such as maneuverability, structural
                integrity, and dynamic load responses. Integrated sensor system
                allows the client access to quantitative results that help
                better debug design problems and fix them.{" "}
              </li>
              <li>
                <h5>VR Flight Simulators AAL </h5>offers virtual reality-based
                flight simulators tailored for drone training and testing. These
                simulators provide a fully immersive environment where UAV
                pilots can test control systems, train under different
                environmental conditions, and simulate emergency procedures,
                ensuring safe and reliable operation in the field.
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}
