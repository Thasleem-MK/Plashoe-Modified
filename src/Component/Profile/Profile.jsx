import React, { useEffect, useState } from "react";
import TitleHook from "../Hook/TitleHook";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../Axios";
import Information from "./Information";
import Orders from "./Orders";
import Cart from "../Cart/Cart";

export default function Profile() {
  TitleHook("Profile");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [mainComponent, setMainComponent] = useState("Information");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Axios.get("/users/profile", {
          withCredentials: true,
        });
        console.log(result);
        setUser(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [navigate]);

  const logout = () => {
    document.cookie = "token=; Max-Age=-99999999;";
    document.cookie = "refreshToken=; Max-Age=-99999999;";
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <ul className="space-y-4">
          <li>
            <button
              className="text-left w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
              onClick={() => setMainComponent("Information")}
            >
              Profile Information
            </button>
          </li>
          <li>
            <button
              className="text-left w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
              onClick={() => setMainComponent("Cart")}
            >
              Cart
            </button>
          </li>
          <li>
            <button
              className="text-left w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
              onClick={() => setMainComponent("Orders")}
            >
              Orders
            </button>
          </li>
          <li>
            <button
              className="text-left w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
              onClick={() => navigate("/collection")}
            >
              Go to Collections
            </button>
          </li>
          <li>
            <button
              className="text-left w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-lg p-1">
        {user ? (
          <div>
            {mainComponent === "Information" && <Information user={user} />}
            {mainComponent === "Orders" && <Orders />}
            {mainComponent === "Cart" && <Cart />}
          </div>
        ) : (
          <div className="p-5 h-full cursor-wait">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
