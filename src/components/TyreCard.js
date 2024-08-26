import React from "react";

const TyreCard = ({ tyre }) => {
  return (
    <div className="tyre-card">
      <div className="tyre-header d-flex justify-content-between">
        <div className="brand-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPRv5fFUsyHMkExYMaF0r1HhWJAtUfHqqvOQ&s"
            alt={tyre.brand}
          />
        </div>
        <div className="warranty-tag">
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/warranty-tag-1x.png?v=1500&tr=q-60"
            alt="Warranty"
          />
          <span>{tyre.warranty}</span>
        </div>
      </div>
      <h5 className="model-name">{tyre.model}</h5>
      <p className="size">{tyre.size}</p>
      <div className="tyre-image">
        <img src={tyre.imageUrl} alt={tyre.model} />
      </div>
      <div className="rating-price">
        <div className="rating">
          <span className="rating-icon">
            ★ <span className="rating-value text-light">{tyre.rating}</span>
          </span>
          <span className="text-muted">({tyre.reviews} Reviews)</span>
        </div>
        <div className="price">₹ {tyre.price}</div>
      </div>
      <div className="offer">{tyre.offer}</div>
      <div className="type">{tyre.type}</div>
    </div>
  );
};

export default TyreCard;
