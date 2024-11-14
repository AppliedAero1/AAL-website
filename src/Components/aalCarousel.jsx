import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import companyLogo1 from "./Images/logo111.jpeg";
import companyLogo02 from "./Images/logo02.jpeg";
import companyLogoo3 from "./Images/logoo3.jpeg";
import companyLogoo4 from "./Images/logoo4.jpeg";

const customStyles = {
  carouselContainer: {
    maxHeight: "1500px",
    overflow: "hidden"
  },
  carouselItemImage: {
    width: "100%",
    height: "auto"
  },
  captionStyle: {
    position: "absolute",
    bottom: "10px",
    left: "0px",
    right: "0px",
    color: "#fff",
    fontSize: "18px",

    textAlign: "center"
  },
  largeCard: {
    width: "80%",
    margin: "0 auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
  },
  cardImage: {
    width: "100%",
    height: "auto"
  },
  cardText: {
    fontSize: "18px"
  }
};

function Example() {
  return (
    <Carousel slide={false} style={customStyles.carouselContainer}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={companyLogo1}
          alt="Applied Aero Labs Overview"
          style={customStyles.carouselItemImage}
        />
        <Carousel.Caption style={customStyles.captionStyle}>
          <Card className="bg-dark text-white" style={customStyles.largeCard}>
            <Card.Img
              src={companyLogo02}
              alt="Company Logo"
              style={customStyles.cardImage}
            />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
            <h3>Applied Aero Labs</h3>
            <p>
              {" "}
              Applied Aerolabs is an indigenous startup that caters to the
              aerodynamic research and development needs of the Indian market.
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={companyLogo1}
          alt="What We Offer"
          style={customStyles.carouselItemImage}
        />
        <Carousel.Caption style={customStyles.captionStyle}>
          <Card className="bg-dark text-white" style={customStyles.largeCard}>
            <Card.Img
              src={companyLogoo3}
              alt="Aerodynamic Research"
              style={customStyles.cardImage}
            />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
            <h3>WHAT WE OFFER</h3>
            <p>
              At our start-up, we understand that every customer faces unique
              challenges.
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={companyLogo1}
          alt="Contact Us"
          style={customStyles.carouselItemImage}
        />
        <Carousel.Caption style={customStyles.captionStyle}>
          <Card className="bg-dark text-white" style={customStyles.largeCard}>
            <Card.Img
              src={companyLogoo4}
              alt="Get In Touch"
              style={customStyles.cardImage}
            />
            <Card.ImgOverlay>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
            <h3>GET IN TOUCH</h3>
            <p>
              {" "}
              Our team possesses excellent knowledge in both computational and
              experimental fluid mechanics.
            </p>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Example;
