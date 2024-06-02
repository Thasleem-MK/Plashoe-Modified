import React from "react";
import TitleHook from "../Hook/TitleHook";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

function LookBook() {
  TitleHook("Lookbook");
  return (
    <div className="container mx-auto px-2">
      <div className="mt-5 text-black text-center">
        <h1 className="text-5xl">Lookbook</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        {/* Lookbook item 1 */}
        <div className="border rounded-lg overflow-hidden">
          <img
            className="w-full"
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-4.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="text-2xl font-bold">Fall/Winter 2021</p>
            <p className="mt-2">
              Elementum donec leo vulputate sit proin suspendisse malesuada
              neque proin gravida ut platea vitae duis hac hac vel id ipsum
              ultricies ut faucibus ultrices.
            </p>
            <a
              href="#first"
              className="block text-center bg-yellow-500 text-white py-2 mt-4 rounded hover:bg-yellow-600"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        {/* Lookbook item 2 */}
        <div className="border rounded-lg overflow-hidden">
          <img
            className="w-full"
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-3.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="text-2xl font-bold">Spring/Summer 2021</p>
            <p className="mt-2">
              Elementum donec leo vulputate sit proin suspendisse malesuada
              neque proin gravida ut platea vitae duis hac hac vel id ipsum
              ultricies ut faucibus ultrices.
            </p>
            <a
              href="#first"
              className="block text-center bg-yellow-500 text-white py-2 mt-4 rounded hover:bg-yellow-600"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        {/* Lookbook item 3 */}
        <div className="border rounded-lg overflow-hidden">
          <img
            className="w-full"
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-2.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="text-2xl font-bold">Go & Play</p>
            <p className="mt-2">
              Elementum donec leo vulputate sit proin suspendisse malesuada
              neque proin gravida ut platea vitae duis hac hac vel id ipsum
              ultricies ut faucibus ultrices.
            </p>
            <a
              href="#first"
              className="block text-center bg-yellow-500 text-white py-2 mt-4 rounded hover:bg-yellow-600"
            >
              SHOP NOW
            </a>
          </div>
        </div>
        {/* Lookbook item 4 */}
        <div className="border rounded-lg overflow-hidden">
          <img
            className="w-full"
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-lookbook-cover-image-1.jpg"
            alt=""
          />
          <div className="p-4">
            <p className="text-2xl font-bold">Adventurer Gear</p>
            <p className="mt-2">
              Elementum donec leo vulputate sit proin suspendisse malesuada
              neque proin gravida ut platea vitae duis hac hac vel id ipsum
              ultricies ut faucibus ultrices.
            </p>
            <a
              href="#first"
              className="block text-center bg-yellow-500 text-white py-2 mt-4 rounded hover:bg-yellow-600"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default LookBook;
