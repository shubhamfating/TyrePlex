import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceCard = ({ image, name, buttonText }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ padding: "20px" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{name}</Card.Title>
        <Button variant="danger">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
