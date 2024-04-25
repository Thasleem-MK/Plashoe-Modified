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
    <div className="col-12">
      <div className="col-12 bg-secondary pt-1 pb-4 mt-5">
        <div className="col-md-6 border mt-5 bg-light px-3 mx-auto rounded">
          <div className="row">
            <div className="py-3">
              <form ref={form} onSubmit={sendEmail}>
                <h1>Contact us</h1>
                <div className="form-group mt-3">
                  <h5 htmlFor="name">Name</h5>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="from_name"
                  />
                </div>
                <div className="form-group mt-3">
                  <h5 htmlFor="email">Email</h5>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    name="from_email"
                  />
                </div>
                <div className="form-group mt-3">
                  <h5 htmlFor="message">Message</h5>
                  <textarea
                    id="message"
                    rows="3"
                    className="form-control"
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="btn btn-success mt-3"
                  type="submit"
                  onClick={() => alert("Email send successfuly")}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
