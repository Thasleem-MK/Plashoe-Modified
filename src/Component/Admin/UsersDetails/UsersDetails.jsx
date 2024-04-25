import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import AdminNavBar from "../Nav/NavBar";
import "../Home/Home.css";
import { Form } from "react-bootstrap";
import { Context } from "../../UseContext/Context";
import { useNavigate } from "react-router-dom";
import { Info } from "@mui/icons-material";
import axios from "axios";

function UsersDetails() {
  const [userData, setUserData] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/admin/users", { withCredentials: true })
      .then((result) => {
        setUserData(result.data);
      })
      .catch((err) => {
        console.log(err);
        Navigate("/admin/login");
      });
  }, []);

  const DeleteUser = (Index) => {
    const UpdatedUserData = [...userData];
    UpdatedUserData.splice(Index, 1);
    setUserData(UpdatedUserData);
  };
  return (
    <div className="vh-100">
      <div>
        <AdminNavBar />
        <div className="col-md-5 mx-auto px-4 mb-5">
          <Form className="mt-4 border">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setSearchUser(event.target.value)}
            />
          </Form>
        </div>
        {searchUser === ""
          ? userData.map((element, Index) => {
              return (
                <div className="px-5 mt-2 col-md-10 mx-auto">
                  <MDBCard className="mb-3">
                    <MDBCardBody className="p-1">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src={`${element?.profileImg}`}
                              fluid
                              className="rounded-3"
                              style={{ width: "65px" }}
                              alt="Shopping item"
                            />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5" className="my-auto">
                              {element.name}
                            </MDBTypography>
                            <p className="small mb-0">{`${element.email}`}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center me-2">
                          <Info
                            className="text-primary me-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => Navigate(`${element._id}`)}
                          />
                          {/* <MDBIcon
                            fas
                            icon="trash-alt"
                            className="text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() => DeleteUser(Index)}
                          /> */}
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              );
            })
          : userData.map((element, Index) => {
              return (
                <div>
                  {element.name
                    .toLowerCase()
                    .includes(searchUser.toLowerCase()) ||
                  element.userName
                    .toLowerCase()
                    .includes(searchUser.toLowerCase()) ||
                  element.email
                    .toLowerCase()
                    .includes(searchUser.toLowerCase()) ? (
                    <div className="px-5 mt-2 col-md-10 mx-auto">
                      <MDBCard className="mb-3">
                        <MDBCardBody className="p-1">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={`${element.profileImg}`}
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5" className="my-auto">
                                  {element.name}
                                </MDBTypography>
                                <p className="small mb-0">{`${element._id}`}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center me-2">
                              <Info
                                className="text-primary me-3"
                                style={{ cursor: "pointer" }}
                                onClick={() => Navigate(`${element.UserName}`)}
                              />
                              {/* <MDBIcon
                                fas
                                icon="trash-alt"
                                className="text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() => DeleteUser(Index)}
                              /> */}
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default UsersDetails;
