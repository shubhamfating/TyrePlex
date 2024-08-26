import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PaymentModes = () => {
  const paymentModes = [
    "Deposit to Account",
    "Credit Card/Debit Card",
    "Wallets (PayTM/PhonePe/Amazon etc.)",
    "Net Banking",
    "UPI",
  ];

  return (
    <div className="payment-modes-container p-4 container">
      <h5>Payment Mode</h5>
      <Row>
        <Col sm={6}>
          <ul className="payment-list">
            {paymentModes.slice(0, 3).map((mode, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkmark-icon text-bold"
                />{" "}
                {mode}
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={6}>
          <ul className="payment-list">
            {paymentModes.slice(3).map((mode, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="checkmark-icon text-bold"
                />{" "}
                {mode}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentModes;
