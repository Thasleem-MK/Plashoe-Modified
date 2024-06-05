import React, { useRef } from "react";
import TitleHook from "../Hook/TitleHook";
import emailjs from "@emailjs/browser";

export default function Contact() {
  TitleHook("Contact");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vxp5f98",
        "template_x6jc3ra",
        form.current,
        "qZW-t3_48v9PFDi_v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-600 py-1 mt-5">
        <div className="w-full max-w-md border mt-5 bg-white px-3 mx-auto rounded">
          <div className="py-3">
            <form ref={form} onSubmit={sendEmail}>
              <h1 className="text-xl font-bold">Contact us</h1>
              <div className="form-group mt-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="name"
                  placeholder="Enter your name"
                  name="from_name"
                />
              </div>
              <div className="form-group mt-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="email"
                  placeholder="Enter your email"
                  name="from_email"
                />
              </div>
              <div className="form-group mt-3">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  name="message"
                ></textarea>
              </div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mt-3"
                type="submit"
                onClick={() => alert("Email sent successfully")}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}