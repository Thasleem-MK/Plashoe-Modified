import React from "react";
import TitleHook from "../Hook/TitleHook";
import "./Sale.css";
import Collection from "../Collection/Collection";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function Sale() {
  TitleHook("Sale");
  return (
    <div className="col-12 ps-5 pe-5">
      <div className="col-12 mt-4">
        <h1 className="h1">Sale</h1>
      </div>
      <div className="col-12 Sale">
        <div className="col-12 col-md-5 Sale1 m-3">
          <div>
            <p className="h4 text-white">Refer a friend</p>
            <p className="h1 text-white">Get 20% OFF</p>
            <button className="Btn ps-4 pe-4 pt-2 pb-2">LERN MORE</button>
          </div>
        </div>
        <div className="col-12 col-md-5 Sale2 m-3">
          <div>
            <p className="h4 text-white">Promotion</p>
            <p className="h1 text-white">Student Discount</p>
            <button className="Btn ps-4 pe-4 pt-2 pb-2">LERN MORE</button>
          </div>
        </div>
      </div>
      <Collection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Sale;
