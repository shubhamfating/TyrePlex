import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import MRFTyreCard from "./MRFTyreCard";

const MRFTyreList = () => {
  const [sortOption, setSortOption] = useState("Most Popular");
  const tyres = [
    {
      imageUrl:
      "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60",

      warranty: "5 Year Warranty",
      model: "AAAMAZER 4G LIFE",
      size: "145/80 R12",
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
      rating: 4,
      reviews: 320,
      price: "3,136",
      offer: "Offer available",
      type: "Tube Type",
    },
  ];

  // Function to handle sorting
  const sortTyres = (tyresArray) => {
    switch (sortOption) {
      case "Price: High to Low":
        return tyresArray.sort(
          (a, b) =>
            parseFloat(b.price.replace(/,/g, "")) -
            parseFloat(a.price.replace(/,/g, ""))
        );
      case "Price: Low to High":
        return tyresArray.sort(
          (a, b) =>
            parseFloat(a.price.replace(/,/g, "")) -
            parseFloat(b.price.replace(/,/g, ""))
        );
      case "Model: A to Z":
        return tyresArray.sort((a, b) => a.model.localeCompare(b.model));
      case "Model: Z to A":
        return tyresArray.sort((a, b) => b.model.localeCompare(a.model));
      default:
        return tyresArray;
    }
  };

  const sortedTyres = sortTyres([...tyres]);

  return (
    <div>
      <div className="row">
        <div className="filter-section">
          <div className="filter-title m-3">Tyres sold by this Dealer</div>
          <div className="filter-controls m-3">
            <select
              className="filter-by"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Most Popular">Most Popular</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Model: A to Z">Model: A to Z</option>
              <option value="Model: Z to A">Model: Z to A</option>
            </select>
            <a href="/" className="advanced-link">
              Advanced
            </a>
          </div>
        </div>
        <Row className="d-flex justify-content-left">
          {sortedTyres.map((tyre, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <MRFTyreCard tyre={tyre} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MRFTyreList;
