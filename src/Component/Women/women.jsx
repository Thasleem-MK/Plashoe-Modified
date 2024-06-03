import React, { useContext, useEffect, useState } from "react";
import TitleHook from "../Hook/TitleHook";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Axios";
import { Context } from "../UseContext/Context";

function Women() {
  TitleHook("Women Archives");
  const Navigate = useNavigate();
  const { cart, setCart } = useContext(Context);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/users/products/category/Women`)
      .then((result) => setProduct(result.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const AddCart = async (element) => {
    await Axios.post(
      "http://localhost:7000/api/users/cart",
      { productId: element._id },
      { withCredentials: true }
    ).catch(() => {
      Navigate("/login");
    });
    setCart(!cart);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {product.map((element) => (
        <div key={element._id} className="p-4 bg-white rounded-lg shadow-md">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={element.image}
              alt={element.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-25"></div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">{element.title}</h3>
            <p className="text-gray-700">{`Price : $${element.price}`}</p>
            <button
              onClick={() => AddCart(element)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Women;
