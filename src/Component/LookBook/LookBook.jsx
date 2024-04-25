import React from "react";
import TitleHook from "../Hook/TitleHook";
import "./LookBook.css"
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function LookBook() {
  TitleHook("Lookbook");
  return (
    <div className="col-12 ps-5 pe-5">
      <div className="col-12 mt-5 text-black" id="first">
        {<h1 className="display-1 h1">Lookbook</h1>}
      </div>
      <div className="col-12">
        <img
          style={{ width: "inherit" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
          alt=""
        />
      </div>
      <div className="col-12 d-flex mb-4 mt-4 DescribtionText">
        <div className="col-6">
          <p className="h2 text-black">Fall/Winter 2021</p>
        </div>
        <div className="col-6">
          <p className="h5" style={{lineHeight:"2rem"}}>
            Elementum donec leo vulputate sit proin suspendisse <br/>malesuada neque
            proin gravida ut platea vitae duis hac <br/>hac vel id ipsum ultricies ut
            faucibus ultrices.<br/><br/><a href="#first"><u className="text-warning h6">SHOP NOW</u></a>
          </p>
        </div>
      </div>
      


      <div className="col-12">
        <img
          style={{ width: "inherit" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg"
          alt=""
        />
      </div>
      <div className="col-12 d-flex mb-4 mt-4 DescribtionText">
        <div className="col-6">
          <p className="h2 text-black">Spring/Summer <br/>2021</p>
        </div>
        <div className="col-6">
          <p className="h5 text-left" style={{lineHeight:"2rem"}}>
            Elementum donec leo vulputate sit proin suspendisse <br/>malesuada neque
            proin gravida ut platea vitae duis hac <br/>hac vel id ipsum ultricies ut
            faucibus ultrices.<br/><br/><a href="#first"><u className="text-warning h6">SHOP NOW</u></a>
          </p>
        </div>
      </div>


      <div className="col-12">
        <img
          style={{ width: "inherit" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg"
          alt=""
        />
      </div>
      <div className="col-12 d-flex mb-4 mt-4 DescribtionText">
        <div className="col-6">
          <p className="h2 text-black">Go & Play</p>
        </div>
        <div className="col-6">
          <p className="h5 text-left" style={{lineHeight:"2rem"}}>
            Elementum donec leo vulputate sit proin suspendisse <br/>malesuada neque
            proin gravida ut platea vitae duis hac <br/>hac vel id ipsum ultricies ut
            faucibus ultrices.<br/><br/><a href="#first"><u className="text-warning h6">SHOP NOW</u></a>
          </p>
        </div>
      </div>


      <div className="col-12">
        <img
          style={{ width: "inherit" }}
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1.jpg"
          alt=""
        />
      </div>
      <div className="col-12 d-flex mb-4 mt-4 DescribtionText">
        <div className="col-6">
          <p className="h2 text-black">Adventurer Gear</p>
        </div>
        <div className="col-6">
          <p className="h5 text-left" style={{lineHeight:"2rem"}}>
            Elementum donec leo vulputate sit proin suspendisse <br/>malesuada neque
            proin gravida ut platea vitae duis hac <br/>hac vel id ipsum ultricies ut
            faucibus ultrices.<br/><br/><a href="#first"><u className="text-warning h6">SHOP NOW</u></a>
          </p>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default LookBook;
