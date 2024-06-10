import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../UseContext/Context";
import Cookies from "js-cookie";
import { FiMenu, FiUser, FiUserCheck } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  const { setSearch } = useContext(Context);
  const [login] = useState(Cookies.get("token"));
  const [menuOpen, setMenuOpen] = useState(false);
  const Navigate = useNavigate();

  return (
    <div className="fixed top-0 w-full z-50 bg-gray-200 shadow-lg">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span
            className="text-xl font-bold cursor-pointer"
            onClick={() => Navigate("/")}
          >
            PLASHOE
          </span>
        </div>
        <div className="lg:hidden flex items-center">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <div className="flex space-x-8">
            {["men", "women", "collection", "lookbook", "sale"].map(
              (category) => (
                <span
                  key={category}
                  className="cursor-pointer hover:text-gray-700 transition"
                  onClick={() => Navigate(`/${category}`)}
                >
                  {category.toUpperCase()}
                </span>
              )
            )}
          </div>
          <div className="flex items-center space-x-8">
            <span
              className="cursor-pointer hover:text-gray-700 transition"
              onClick={() => Navigate("/contact")}
            >
              CONTACT
            </span>
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="px-4 py-2 border rounded-lg lg:w-48 focus:outline-none"
                onClick={() => Navigate("/collection")}
                onChange={(event) => setSearch(event.target.value)}
              />
              <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
            </div>
            <span
              className="cursor-pointer hover:text-gray-700 transition"
              onClick={() => Navigate("/profile")}
            >
              <FiUser />
            </span>
            {login && (
              <span
                className="cursor-pointer hover:text-gray-700 transition"
                onClick={() => Navigate("/admin/home")}
              >
                <FiUserCheck />
              </span>
            )}
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-3">
            {["men", "women", "collection", "lookbook", "sale"].map(
              (category) => (
                <span
                  key={category}
                  className="cursor-pointer hover:text-gray-700 transition"
                  onClick={() => Navigate(`/${category}`)}
                >
                  {category.toUpperCase()}
                </span>
              )
            )}
            <span
              className="cursor-pointer hover:text-gray-700 transition"
              onClick={() => Navigate("/contact")}
            >
              CONTACT
            </span>
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="px-4 py-2 border rounded-lg w-full focus:outline-none"
                onClick={() => Navigate("/collection")}
                onChange={(event) => setSearch(event.target.value)}
              />
              <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
            </div>
            <span
              className="cursor-pointer hover:text-gray-700 transition"
              onClick={() => Navigate("/profile")}
            >
              Profile
            </span>
            {login && (
              <span
                className="cursor-pointer hover:text-gray-700 transition"
                onClick={() => Navigate("/admin/home")}
              >
                <FiUserCheck />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
