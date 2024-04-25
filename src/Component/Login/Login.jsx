import React, { useState } from "react";
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
import axios from "axios";

function Login() {
  TitleHook("Login");
  const [user, setUser] = useState({ userId: "", password: "" });
  const Navigate = useNavigate();

  const loginSubmit = async () => {
    await axios
      .post("http://localhost:7000/api/users/login", user, {
        withCredentials: true,
      })
      .then((result) => {
        alert(result.data);
        Navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        if (error.message || error.response.data) {
          if (error.response.data.message) {
            alert(error.response.data.message);
          } else {
            alert(error.message);
          }
        }
      });
  };

  return (
    <MDBContainer
      className="p-3 mt-5 mb-5 d-flex flex-column col-lg-6 col-11"
      style={{ backgroundColor: "lightskyblue", borderRadius: "3px" }}
    >
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            style={{
              backgroundColor: "lightcyan",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <Link to={"/register"}>
            <MDBTabsLink style={{ fontWeight: "bold" }}>Register</MDBTabsLink>
          </Link>
        </MDBTabsItem>
      </MDBTabs>
      <MDBInput
        wrapperClass="mb-4"
        label="Username or Email"
        id="form1"
        type="text"
        value={user.userId}
        onChange={(event) => {
          setUser({ ...user, userId: event.target.value });
        }}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        value={user.password}
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />

      <MDBBtn
        className="mb-3 mt-1 col-2 mx-auto"
        type="button"
        onClick={loginSubmit}
      >
        Log in
      </MDBBtn>

      <div className="text-center">
        Not a member? <Link to={"/register"}>Register</Link>
      </div>
    </MDBContainer>
  );
}

export default Login;
