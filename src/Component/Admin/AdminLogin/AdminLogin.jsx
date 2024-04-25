import React, { useContext, useState } from "react";
import axios from "axios";
import "./AdminLogin.css";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../UseContext/Context";

function AdminLogin() {
  const Navigate = useNavigate();
  const { setLogin, adminData } = useContext(Context);

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const AdminSubmit = async () => {
    try {
      await axios
        .post("http://localhost:7000/api/admin/login", formData, {
          withCredentials: true,
        })
        .then(() => {
          Navigate("/admin/home");
        })
        .catch((err) => {
          const errorMessage = err?.response?.data?.message;
          alert(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-12 ps-5 pe-5 d-flex justify-content-center">
      <div className="col-md-6 col-12">
        <MDBContainer className="p-4 mt-5 bg-light rounded">
          <MDBTabs
            pills
            justify
            className="mb-4 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink className="text-white bg-secondary">
                <h3 className="my-auto">Admin Login</h3>
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBInput
            wrapperClass="mb-4"
            label="Username or Email"
            type="text"
            onChange={(event) =>
              setFormData({ ...formData, userId: event.target.value })
            }
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            type="password"
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />

          <MDBBtn className="mb-4 mx-auto w-50 mt-4" onClick={AdminSubmit}>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not an admin? <Link to={"/login"}>User Login</Link>
            </p>
          </div>
        </MDBContainer>
      </div>
    </div>
  );
}

export default AdminLogin;
