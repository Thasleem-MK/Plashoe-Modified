import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import axios from "axios";

function Payment() {
  const [result, setResult] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/users/success", { withCredentials: true })
      .then((result) => setResult(result?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h2 className="text-center mx-5">Payment Successful!</h2>
        <div className="payment-details">
          <p>
            <strong>Order ID:</strong>
            {result.orderId}
          </p>
        </div>
        <div className="continue-shopping-btn-container mt-3">
          <Link to="/collection" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
