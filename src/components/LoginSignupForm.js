import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";

const LoginSignupForm = () => {
  return (
    <div>
        <Navbar/>
    <div className="login-signup-form d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          maxWidth: "400px",
          width: "100%",
          border: "2px solid #ccc",
          borderRadius: "10px",
          height: "auto", 
        }}
        className="p-4 shadow-sm"
      >
        <Card.Body>
          <h2 className="text-center mb-4">Login or Signup</h2>
          <Form>
            <Form.Group controlId="formMobileNumber">
              <Form.Control
                type="tel"
                placeholder="Enter your mobile no"
                className="mb-3"
                style={{ height: "50px", fontSize: "16px" }} 
              />
            </Form.Group>
            <p className="text-center text-muted mb-2 h5">
              Your details are safe with us.
            </p>
            <p className="text-center text-muted small mb-4">
              * By proceeding ahead you expressly agree to Terms of Cookie use & Privacy Policy.
            </p>
            <Button variant="primary" type="submit" className="w-100" style={{ height: "50px" }}>
              Get OTP
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default LoginSignupForm;
