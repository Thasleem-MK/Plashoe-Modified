import React from "react";
import AdminNavBar from "../Nav/NavBar";
import "./Home.css";
function AdminHome() {
  return (
    <div>
      <div className="vh-100 Background">
        <AdminNavBar />

        <u><h1 className="h1 text-black mt-5">PLA SHOES</h1></u>
      </div>
    </div>
  );
}

export default AdminHome;
