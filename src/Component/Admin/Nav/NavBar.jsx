import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "@mui/icons-material";
import "../../NavBar/Style.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../UseContext/Context";
import { Button } from "react-bootstrap";

function AdminNavBar() {
  const { setLogin } = useContext(Context);
  const Navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="Plashoe" style={{ cursor: "default" }}>
            PLASHOE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Menu />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 NavBar"
              style={{ maxHeight: "100px", width: "100%" }}
              navbarScroll
            >
              <div className="NavLeft">
                <Nav.Link onClick={() => Navigate("/admin/home")}>
                  HOME
                </Nav.Link>
                <Nav.Link onClick={() => Navigate("/admin/usersdeatails")}>
                  USERS
                </Nav.Link>
                <Nav.Link onClick={() => Navigate("/admin/productsdeatails")}>
                  PRODUCTS
                </Nav.Link>
              </div>
              <div className="NavRight me-3">
                <Button
                  className="bg-danger"
                  onClick={() => {
                    setLogin(false);
                    Navigate("/");
                  }}
                >
                  Logout
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminNavBar;
