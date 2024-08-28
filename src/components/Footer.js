import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-question">
          <div className="row">
            <div className="col-md-6">
              <h3 className="d-flex justify-content-left">
                Have a question about Tyres?
              </h3>
              <p className="d-flex justify-content-left">
                Get an answer in 24 hours from our experts.
              </p>
              <div className="footer-search d-flex justify-content-left">
                <input type="text" placeholder="Ask or search your question" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-question-image float-end">
                <img
                  src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
                  alt="Question"
                  style={{ width: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row"> 

        {/* Footer Links Section */}
        <div className="footer-links d-flex justify-content-between align-items-center">
          {/* Logo and Social Icons */}
          <div className="d-flex flex-column align-items-center col-md-3 ">
            <div className="footer-logo mb-3">
              <img
                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
                alt="TyrePlex"
              />
            </div>
            <div className="footer-social-icons">
              <a href="/" className="social-icon mb-2" style={{ fontSize: "30px" }}>
                <FaFacebook />
              </a>
              <a href="/" className="social-icon" style={{ fontSize: "30px" }}>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav d-flex justify-content-between w-100 col">
            <div className="d-flex flex-column align-items-start">
              <a href="/" className="footer-link mb-2">
                Who We Are
              </a>
              <a href="/" className="footer-link mb-2">
                Are you a Tyre Dealer?
              </a>
            </div>
            <div className="d-flex flex-column align-items-start">
              <a href="/" className="footer-link mb-2">
                Privacy Policy
              </a>
              <a href="/" className="footer-link mb-2">
                Terms of Use
              </a>
            </div>
            <div className="d-flex flex-column align-items-start">
              <a href="/" className="footer-link mb-2">
                Contact Us
              </a>
              <a href="/" className="footer-link mb-2">
                Career
              </a>
              <a href="/" className="footer-link">
                Shipping & Return Policy
              </a>
            </div>
          </div>
        </div>

        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom mt-4 text-center">
          <p>
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
