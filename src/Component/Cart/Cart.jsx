import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitleHook from "../Hook/TitleHook";
import { Axios } from "../../Axios";

export default function Cart() {
  TitleHook("Cart");
  const [cart, setCart] = useState([]);
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("/users/cart", { withCredentials: true })
      .then((result) => {
        setCart(result.data);
      })
      .catch((error) => {
        navigate("/login");
        console.log(error);
      });
  }, [state]);

  const PurchaseUpdater = async (element, value) => {
    if (value === -1) {
      await Axios.put(
        "/users/cart",
        { productId: element.product._id },
        { withCredentials: true }
      );
    } else {
      await Axios.post(
        "/users/cart",
        { productId: element.product._id },
        { withCredentials: true }
      );
    }
    setState(!state);
  };

  const deleteItem = async (element) => {
    const config = {
      data: { productId: element.product._id },
      withCredentials: true,
    };
    await Axios.delete(`/users/cart`, config);
    setState(!state);
  };

  const placeOrder = async () => {
    if (cart.length > 0) {
      await Axios.post("/users/orders", {}, { withCredentials: true })
        .then((result) => {
          setState(!state);
          const paymentLink = result.data;
          window.open(paymentLink, "_blank");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h1>
      <div className="flex justify-between items-center mb-6">
        <Link to="/collection" className="text-blue-600 hover:underline">
          <i className="fas fa-long-arrow-alt-left mr-2"></i> Continue Shopping
        </Link>
        <p className="text-gray-600">Shopping Cart ({cart.length} items)</p>
      </div>
      {cart.length > 0 ? (
        <>
          {cart.map((element, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div className="flex items-center">
                <img
                  src={element.product.image}
                  alt={element.product.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h5 className="text-lg font-semibold">
                    {element.product.title}
                  </h5>
                  <p className="text-gray-600">{element.product.category}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <button
                    className="btn btn-outline rounded-full px-2 py-1 mr-2"
                    disabled={element.quantity === 1}
                    onClick={() => PurchaseUpdater(element, -1)}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="text-lg mx-2">{element.quantity}</span>
                  <button
                    className="btn btn-outline rounded-full px-2 py-1"
                    onClick={() => PurchaseUpdater(element, 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="text-green-500 mb-2">
                  Total: $
                  {parseFloat(
                    (element.quantity * element.product.price).toFixed(2)
                  )}
                </div>
                <button
                  className="btn btn-danger rounded-full px-2 py-1"
                  onClick={() => deleteItem(element)}
                >
                  <i className="fas fa-trash-alt"></i> Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-6">
            <h5 className="text-xl text-gray-700">
              Subtotal: $
              {cart
                .reduce(
                  (acc, item) => acc + item.quantity * item.product.price,
                  0
                )
                .toFixed(2)}
            </h5>
            <button
              className="btn btn-primary"
              disabled={cart.length === 0}
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}
