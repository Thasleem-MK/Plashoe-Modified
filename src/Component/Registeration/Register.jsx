import React, { useState } from "react";
import { Axios } from "../../Axios";
import { Link, useNavigate } from "react-router-dom";
import TitleHook from "../Hook/TitleHook";
import { toast } from "react-toastify";

function Register() {
  TitleHook("Registeration");
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setInput({ ...input, [name]: value });
  };
  const formData = new FormData();
  formData.append(
    "data",
    JSON.stringify({
      name: input.name,
      email: input.email,
      password: input.password,
    })
  );
  const Submit = async () => {
    console.log("SUBMIT", input);
    await Axios.post("/users/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log(result);
        if (result?.data?.status === "Success") {
          toast.success(result?.data?.message);
          Navigate("/login");
        } else {
          toast.error(result?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.data?.message) {
          toast.error(error?.response?.data?.message);
        } else {
          toast.error(error?.message);
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-rose-100">
      <div className="p-6 bg-white rounded-md shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">
            <u>Register</u>
          </h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              id="form_name"
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-rose-500 bg-transparent"
            />
          </div>
          <div className="mb-4">
            <input
              id="form_email"
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-rose-500 bg-transparent"
            />
          </div>
          <div className="mb-4 relative">
            <input
              id="form_password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={handleChange}
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
            onClick={Submit}
            className="w-full py-2 mt-4 bg-rose-500 text-white rounded hover:bg-rose-600"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-rose-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
