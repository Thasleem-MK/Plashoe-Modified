import {
  Menu,
  ShoppingCart,
  Person,
  SupervisorAccount,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../UseContext/Context";
import Cookies from "js-cookie";
import axios from "axios";

function NavBar() {
  const { setSearch, cart } = useContext(Context);
  const [login, setLogin] = useState(Cookies.get("token"));
  const [cartlength, setCartlength] = useState(0);
  const Navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7000/api/users/cart", { withCredentials: true })
  //     .then((result) => {
  //       setCartlength(result?.data?.length);
  //     })
  //     .catch((err) => console.log(err));
  // }, [cart]);

  return (
    <div className="top-0 w-full">
      <nav className="bg-gray-200">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <span
              className="text-xl font-bold cursor-pointer pl-4"
              onClick={() => Navigate("/")}
            >
              PLASHOE
            </span>
          </div>
          <div className="flex lg:hidden">
            <Menu />
          </div>
          <div
            className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-8 w-full"
            id="navbarScroll"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 w-full justify-between">
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/men")}
                >
                  MEN
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/women")}
                >
                  WOMEN
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/collection")}
                >
                  COLLECTION
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/lookbook")}
                >
                  LOOKBOOK
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/sale")}
                >
                  SALE
                </span>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/contact")}
                >
                  CONTACT
                </span>
                {/* <div
                  className="relative cursor-pointer"
                  onClick={() =>
                    login ? Navigate("/cart") : Navigate("/login")
                  }
                >
                  <ShoppingCart />
                  <span className="absolute top-0 left-3 h-3 w-3 text-xs text-center bg-gray-700 text-white rounded-full">
                    {cartlength}
                  </span>
                </div> */}
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/profile")}
                >
                  <Person />
                </span>
                <div className="flex">
                  <input
                    type="search"
                    placeholder="Search"
                    className="px-4 py-2 border rounded-lg"
                    onClick={() => Navigate("/collection")}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </div>
                <span
                  className="cursor-pointer"
                  onClick={() => Navigate("/admin/home")}
                >
                  <SupervisorAccount />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
