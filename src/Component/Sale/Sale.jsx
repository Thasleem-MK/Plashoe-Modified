import React from "react";
import TitleHook from "../Hook/TitleHook";
import Collection from "../Collection/Collection";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function Sale() {
  TitleHook("Sale");
  return (
    <div className="w-full px-5">
      <div className="w-full mt-4">
        <h1 className="text-4xl font-bold">Sale</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around">
        <div className="w-full md:w-5/12 bg-cover bg-center h-96 m-3 flex justify-center items-center rounded-sm bg-[url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-promo-image-2.jpg')]">
          <div>
            <p className="text-xl text-white">Refer a friend</p>
            <p className="text-4xl text-white">Get 20% OFF</p>
            <button className="bg-transparent text-white border border-white px-4 py-2 mt-4 hover:bg-white hover:text-blue-500">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="w-full md:w-5/12 bg-cover bg-center h-96 m-3 flex justify-center items-center rounded-sm bg-[url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-promo-image-1.jpg')]">
          <div>
            <p className="text-xl text-white">Promotion</p>
            <p className="text-4xl text-white">Student Discount</p>
            <button className="bg-transparent text-white border border-white px-4 py-2 mt-4">
              LEARN MORE
            </button>
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
