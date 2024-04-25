import React from "react";
import TitleHook from "../Hook/TitleHook";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import "./OurStory.css";

function OurStory() {
  TitleHook("Story");

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="text-center mt-5">
            <h1 className="display-2 fw-bold">Our Story</h1>
            <p className="lead mb-4">
              Taking stylish and sustainable footwear with a focus on creating a
              positive impact on both the world and the people.
            </p>
          </div>
          <div className="embed-responsive embed-responsive-16by9 mt-5">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/XHOmBV4js_E?si=oQWAn0Y9_NmnLfpW"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurStory;
