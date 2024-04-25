import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

function PaymentCancel() {
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h2 className="text-center mx-5 mt-3">Payment Canceled!</h2>
        <div className="continue-shopping-btn-container mt-4">
          <Link to="/cart" className="btn btn-primary">
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancel;
