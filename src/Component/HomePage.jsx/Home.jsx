import React from "react";
import TitleHook from "../Hook/TitleHook";
import "./Home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function Home() {
  TitleHook("Home");
  const Navigate = useNavigate();
  return (
    <div className="Root">
      <div className="col-11 pt-4 main-image">
        <div className="image1">
          <div className="texts col-6">
            <p className="loveThePlanet-text text-white">
              Love the planet <br />
              we walk on
            </p>
            <p className="Text-Bibendum mt-4 text-white">
              Bibendum fermentum, aenean donec pretium aliquam blandit <br />
              tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
            </p>
            <div className="ms-5 buttons">
              <Button
                className="bg-white text-black me-3 mt-4"
                onClick={() => Navigate("/men")}
              >
                SHOP MEN
              </Button>
              <Button
                className="bg-white text-black mt-4 me-3"
                onClick={() => Navigate("/women")}
              >
                SHOP WOMEN
              </Button>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontWeight: "500", paddingTop: "1rem" }}>AS SEEN IN:</p>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
            alt=""
            style={{ cursor: "pointer" }}
          />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
