import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#778899",
        color: "#ffffff",
        paddingTop: "20px"
      }}
      className="text-center text-lg-start"
    >
      <Container>
        <Row>
          <Col lg={4} className="py-4 text-center text-lg-start">
            <div className="mb-3">
              <img
                src="/src/Components/Images/logo.png"
                alt="Applied Aero Labs Logo"
                style={{
                  height: "40px",
                  marginBottom: "10px"
                }}
              />
            </div>

            <p style={{ margin: 0 }}>
              Copyrights
              <span>&#169;</span> 2023 - {new Date().getFullYear()} Applied Aero
              Labs&reg;
              <br />
              All rights reserved.
            </p>
          </Col>

          <Col lg={4} className="py-4">
            <ul className="list-unstyled">
              <li>
                <a href="/home" style={{ color: "#ffffff" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/uav-testing" style={{ color: "#ffffff" }}>
                  UAV Testing
                </a>
              </li>
              <li>
                <a href="/computationalsolutions" style={{ color: "#ffffff" }}>
                  Computational Solutions
                </a>
              </li>
              <li>
                <a href="/inquiry" style={{ color: "#ffffff" }}>
                  Inquiry
                </a>
              </li>
              <li>
                <a href="/contactus" style={{ color: "#ffffff" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} className="py-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
                style={{ color: "#00008b" }}
              >
                <FaFacebookF />
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                style={{ color: "000000" }}
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
