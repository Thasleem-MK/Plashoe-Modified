import React, { useEffect, useState } from "react";
import "./Profile.css";
import TitleHook from "../Hook/TitleHook";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  TitleHook("Profile");
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = async () => {
      try {
        await axios
          .get("http://localhost:7000/api/users/profile", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setUser(result.data.data);
          })
          .catch((error) => {
            Navigate("/login");
          });
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, []);

  const logout = () => {
    document.cookie = "token=; Max-Age=-99999999;";
    document.cookie = "refreshToken=; Max-Age=-99999999;";
    Navigate("/");
    window.location.reload();
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              {user && (
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={user.profileImg}
                      alt="Profile"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-9">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">@{user.userName}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Joined on:{user.accountCreatedDate}
                      </small>
                    </p>
                    <button className="btn btn-danger me-2" onClick={logout}>
                      Logout
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        Navigate("/collection");
                      }}
                    >
                      Go to Collection
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
