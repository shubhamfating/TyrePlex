import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import MRFTyreCard from "./MRFTyreCard";

const MRF = () => {
  const tyres = [
    {
      imageUrl:
        "https://www.google.com/imgres?q=mrf%20tyre%20logo&imgurl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2022%2F12%2FMRF-Logo.png&imgrefurl=https%3A%2F%2F1000logos.net%2Fmrf-logo%2F&docid=GMbM8k1XTGDUAM&tbnid=4PEw1CoXI4PYsM&vet=12ahUKEwiJqpPjnZKIAxWRxzgGHZEpJ_0QM3oECFIQAA..i&w=3840&h=2160&hcb=2&ved=2ahUKEwiJqpPjnZKIAxWRxzgGHZEpJ_0QM3oECFIQAA",
      warranty: "5 Year Warranty",
      model: "AAAMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "4,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AAMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "BAMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },
    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },
    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },

    {
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },
  ];

  return (
    <div>
      <div className="row">
        <Row className="d-flex justify-content-left">
          {tyres.map((tyre, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <MRFTyreCard tyre={tyre} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MRF;
