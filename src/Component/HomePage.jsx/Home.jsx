import React from "react";
import TitleHook from "../Hook/TitleHook";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function Home() {
  TitleHook("Home");
  const Navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="col-11 pt-4 relative w-full">
        <div
          className="relative w-full h-96 sm:h-[50rem] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg")',
          }}
        >
          <div className="absolute z-10 top-32 left-5 sm:top-72 sm:left-40 text-left text-white">
            <p className="text-2xl sm:text-4xl font-bold leading-tight">
              Love the planet <br /> we walk on
            </p>
            <p className="mt-4 text-xs sm:text-lg font-normal">
              Bibendum fermentum, aenean donec pretium aliquam blandit <br />
              tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
            </p>
            <div className="mt-4 space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                className="bg-white text-black px-4 py-2"
                onClick={() => Navigate("/men")}
              >
                SHOP MEN
              </button>
              <button
                className="bg-white text-black px-4 py-2"
                onClick={() => Navigate("/women")}
              >
                SHOP WOMEN
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-around items-center flex-wrap pt-4">
          <p className="font-medium">AS SEEN IN:</p>
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
            alt=""
            className="cursor-pointer"
          />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;