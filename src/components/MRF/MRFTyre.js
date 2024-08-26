import React from "react";
import Navbar from "../Navbar";
import MRFTyreList from "./MRFTyreList";
import Footer from "../Footer";
import PaymentModes from "../PaymentModes";

const MRFTyre = () => {
  return (
    <div>
      <Navbar />
      <div className="mrf"> 
      <div className="container card mt-5">
        <h1 className="m-2 ">MRF Car Tyres</h1>
        <p className="m-2 h5">
          MRF Tyres manufactures 60 tyres that can fit in Cars. Price for MRF
          Car tyre starts at Rs. 2,160 in India. MRF produces one of the best
          Tube Type and Tubeless tyres for Cars. Other top manufactures that
          produces Car tyres are CEAT and Goodyear. Below you can browse the
          entire range of MRF Car tyres manufactured by the brand.
        </p>
      </div>
      <MRFTyreList />
      <PaymentModes/>
      <Footer/>
      </div>
    </div>
  );
};

export default MRFTyre;
