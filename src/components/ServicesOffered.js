import React from "react";
import { Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

const ServicesOffered = () => {
  const services = [
    {
      id: 1,
      name: "Wheel Balancing",
      image: "https://cdn.tyreplex.net/images/wheel-alignment-bal.png",
    },
    {
      id: 2,
      name: "Wheel Alignment",
      image: "https://cdn.tyreplex.net/images/wheel-alignment.png",
    },
  ];

  return (
    <div className="card">
      <div className="p-4">
        <h5>Services offered by this dealer</h5>
        <Row className="d-flex justify-content-left">
          {services.map((service) => (
            <Col key={service.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <ServiceCard
                image={service.image}
                name={service.name}
                buttonText="Book Now"
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicesOffered;
