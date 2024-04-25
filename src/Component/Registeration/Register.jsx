import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleHook from "../Hook/TitleHook";

function Register() {
  TitleHook("Registeration");
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    profileImg: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const formData = new FormData();
  formData.append("image", input.profileImg[0]);
  formData.append(
    "data",
    JSON.stringify({
      name: input.name,
      email: input.email,
      password: input.password,
      userName: input.userName,
    })
  );
  const Submit = async () => {
    await axios
      .post("http://localhost:7000/api/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        alert(result.data.message);
        if (result.data.status === "Success") {
          Navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <div>
      <MDBContainer
        className="p-3 mt-5 d-flex flex-column col-lg-6 col-11"
        style={{ backgroundColor: "lightskyblue", borderRadius: "3px" }}
      >
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <Link to={"/login"}>
              <MDBTabsLink style={{ fontWeight: "bold" }}>Login</MDBTabsLink>
            </Link>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              style={{
                backgroundColor: "lightcyan",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        <form action="">
          <MDBInput //Input fields starts here........................................
            wrapperClass="mb-4"
            label="Name"
            id="form_name"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            style={{ color: "black", fontWeight: "300" }}
          />
          <MDBInput
            className="Username"
            wrapperClass="mb-4"
            label="Username"
            id="form_username"
            type="text"
            name="userName"
            value={input.userName}
            onChange={handleChange}
            style={{ color: "black", fontWeight: "300" }}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form_email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            style={{ color: "black", fontWeight: "300" }}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form_password"
            type="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
            style={{ color: "black", fontWeight: "300" }}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Profile"
            id="form_con_password"
            type="file"
            name="profileImg"
            onChange={(e) => {
              const file = e.target.files;
              setInput({ ...input, profileImg: file });
            }}
          />
          <MDBBtn className="mb-2 mt-2" type="button" onClick={Submit}>
            Sign in
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  );
}

export default Register;
