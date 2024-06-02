import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="mt-5">
        <div
          className="w-full mb-5 flex flex-col justify-center items-center bg-cover bg-center h-96"
          style={{
            backgroundImage:
              "url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-cta-image-bg.jpg')",
          }}
        >
          <p className="text-4xl text-white mb-2">
            Better for People & the Planet
          </p>
          <p className="text-lg text-white mb-4">
            Ut eget at aliquam sit quis nisl, pharetra et ac pharetra est dictum
            in vulputate
          </p>
          <div>
            <Button
              className="me-4 bg-white text-black"
              onClick={() => navigate("/men")}
            >
              Shop Men
            </Button>
            <Button
              className="bg-white text-black"
              onClick={() => navigate("/women")}
            >
              Shop Women
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-around px-5 py-4 text-lg">
          <div className="md:w-1/4 mt-3 text-left">
            <h3 className="mb-3">PLASHOE</h3>
            <p className="text-gray-500 hover:text-black">
              Praesent eget tortor sit risus egestas nulla pharetra ornare quis
              bibendum est bibendum sapien proin nascetur
            </p>
          </div>
          <div className="md:w-1/5 mt-3 text-left">
            <h3 className="mb-3">Shop</h3>
            <p className="text-gray-500 hover:text-black">Shop Men</p>
            <p className="text-gray-500 hover:text-black">Shop Women</p>
            <p className="text-gray-500 hover:text-black">Lookbook</p>
            <p className="text-gray-500 hover:text-black">Gift Card</p>
            <p className="text-gray-500 hover:text-black">Sale</p>
          </div>
          <div className="md:w-1/5 mt-3 text-left">
            <h3 className="mb-3">About</h3>
            <p className="text-gray-500 hover:text-black">Our Story</p>
            <p className="text-gray-500 hover:text-black">Our Materials</p>
            <p className="text-gray-500 hover:text-black">Our Value</p>
            <p className="text-gray-500 hover:text-black">Sustainability</p>
            <p className="text-gray-500 hover:text-black">Manufacture</p>
          </div>
          <div className="md:w-1/5 mt-3 text-left">
            <h3 className="mb-3">Need Help?</h3>
            <p className="text-gray-500 hover:text-black">FAQs</p>
            <p className="text-gray-500 hover:text-black">Shipping & Returns</p>
            <p className="text-gray-500 hover:text-black">Shoe Care</p>
            <p className="text-gray-500 hover:text-black">Size Chart</p>
            <p className="text-gray-500 hover:text-black">Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
