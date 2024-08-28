import React from "react";
import { Row, Col } from "react-bootstrap";
import MRFTyreCard from "./MRFTyreCard";

const MRF = () => {
  const tyres = [
    {
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
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
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
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
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
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
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
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
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
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
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,936",
      offer: "Offer available",
      type: "Tube Type",
    },
    {
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
      warranty: "5 Year Warranty",
      model: "AMAZER 4G LIFE",
      size: "145/80 R12",
      imageUrl:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",
      rating: 4,
      reviews: 320,
      price: "3,123",
      offer: "Offer available",
      type: "Tube Type",
    },
    {
      logoUrl:
        "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.png",
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
      <Row className="d-flex justify-content-left">
        {tyres.map((tyre, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <MRFTyreCard tyre={tyre} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MRF;
