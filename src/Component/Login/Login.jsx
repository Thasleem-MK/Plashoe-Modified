import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitleHook from "../Hook/TitleHook";
import { Axios } from "../../Axios";
import { toast } from "react-toastify";

function Login() {
  TitleHook("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ userId: "", password: "" });
  const navigate = useNavigate();

  const loginSubmit = async () => {
    await Axios
      .post("/users/login", user, {
        withCredentials: true,
      })
      .then(async (result) => {
        await toast.success(result.data);
        navigate("/profile");
      })
      .catch((error) => {
        if (error.message || error.response.data) {
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            toast.error(error.message);
          }
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-rose-100">
      <div className="p-6 bg-white rounded-md shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">
            <u>Login</u>
          </h2>
        </div>
        <div className="mb-4">
          <input
            id="form_userId"
            type="text"
            name="userId"
            placeholder="Username or Email"
            value={user.userId}
            onChange={(event) => {
              setUser({ ...user, userId: event.target.value });
            }}
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-rose-500 bg-transparent"
          />
        </div>
        <div className="mb-4 relative">
          <input
            id="form_password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-rose-500 bg-transparent"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="button"
          onClick={loginSubmit}
          className="w-full py-2 mt-4 bg-rose-500 text-white rounded hover:bg-rose-600"
        >
          Log in
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Not a member?{" "}
          <Link to="/register" className="text-rose-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
