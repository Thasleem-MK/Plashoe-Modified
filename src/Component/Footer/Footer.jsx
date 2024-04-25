import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Footer() {
  const Navigate = useNavigate();
  return (
    <footer>
      <div className="mt-5">
        <div className="col-12 mb-5 main">
          <p className="h1 text-white mb-2">Better for People & the Planet</p>
          <p className="h6 text-white mb-4">
            Ut eget at aliquam sit quis nisl, pharetra et ac pharetra est dictum
            in vulputate
          </p>
          <div>
            <Button
              className="me-4 bg-white text-black"
              onClick={() => Navigate("/men")}
            >
              shop men
            </Button>
            <Button
              className="bg-white text-black"
              onClick={() => Navigate("/women")}
            >
              shop women
            </Button>
          </div>
        </div>
        <div className="col-12 second ps-5 pe-5 pd-4">
          <div className="col-md-3 mt-3">
            <h3 className="mb-3">PLASHOE</h3>
            Praesent eget tortor sit risus egestas nulla pharetra ornare quis
            bibendum est bibendum sapien proin nascetur
          </div>
          <div className="col-md-2 mt-3">
            <h3 className="mb-3">Shop</h3>
            <p>Shop Men</p>
            <p>Shop Women</p>
            <p>Lookbook</p>
            <p>Gift Card</p>
            <p>Sale</p>
          </div>
          <div className="col-md-2 mt-3">
            <h3 className="mb-3">About</h3>
            <p>Our Story</p>
            <p>Our Meterials</p>
            <p>Our Value</p>
            <p>Sustainability</p>
            <p>Manufacture</p>
          </div>
          <div className="col-md-2 mt-3">
            <h3 className="mb-3">Need Help?</h3>
            <p>FAQs</p>
            <p>Shopping & Returns</p>
            <p>Shoe Care</p>
            <p>Size Chart</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
