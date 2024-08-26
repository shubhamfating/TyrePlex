import React from "react";
import BusinessDetails from "./BusinessDetails";
import GoogleReviews from "./GoogleReviews";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DealsIn from "../DealsIn";
import ServicesOffered from "../ServicesOffered";
import TyreList from "../TyreList";
import MRF from "../MRF/MRF";
import PaymentModes from "../PaymentModes";

const HemkuntTyres = () => {
  return (
    <div>
      <Navbar />
      <div className="business-page">
        <BusinessDetails />
      </div>
      <GoogleReviews />
      <DealsIn />
      <ServicesOffered />
      <TyreList />
      <MRF />
      <PaymentModes/>
      <Footer />
    </div>
  );
};

export default HemkuntTyres;
