import React from "react";

const BusinessDetails = () => {
  return (
    <div className="business-details  row">
      <div className="col-sm-5">
        <h2 className="business-name">SHREE HEMKUNT TYRES AND SERVICES</h2>
        <div className="rating">
          <span className="rating-value">4.9</span>
          <span className="star-rating">★★★★★</span>
          <span className="reviews-count">2278 Reviews</span>
          <span className="verified-badge">
            <i className="bi bi-patch-check ms-5 verified-icon"></i>
            <span className="verified-text">Verified</span>
          </span>
        </div>

        <p className="address ms-3">
          <i className="bi bi-geo-alt m-2 "></i>
          PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
          INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
        </p>
        <p className="hours ms-3">
          <i className="bi bi-clock m-2"></i>Open - Monday to Sunday - 10:00AM
          to 8:00PM
        </p>
        <button type="button" className="btn btn-outline-info btn-lg m-3">
          Get Directions
        </button>
      </div>
      <div className="col-sm-7">
        <img
          width="45%"
          src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
          className="img-rounded spaced-image"
          alt="Cinque Terre"
        />
        <img
          width="45%"
          src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
          className="img-rounded spaced-image"
          alt="Cinque Terre"
        />
      </div>
    </div>
  );
};

export default BusinessDetails;
