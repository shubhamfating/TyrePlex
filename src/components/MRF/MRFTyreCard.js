import React from "react";

const MRFTyreCard = ({ tyre }) => {
  return (
    <div className="tyre-card">
      <div className="tyre-header d-flex justify-content-between">
        <div className="brand-logo">
          <img
            src="data:image/png;base64,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"
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

export default MRFTyreCard;
