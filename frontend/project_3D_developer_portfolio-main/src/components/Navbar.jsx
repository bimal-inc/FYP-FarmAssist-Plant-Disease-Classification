import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
// import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo1.png";
import AuthContext from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (token) {
    const decoded = jwt_decode(token);
    var user_id = decoded.user_id;
  }

  const location = useLocation();
  const navLinks = [
    { id: 1, title: "Home", route: "/" },
    { id: 2, title: "About", route: "/about" },
    { id: 3, title: "Contact Us", route: "/Contact" },
    { id: 4, title: "Projects", route: "/projects" },
    { id: 5, title: "Teams", route: "/Teams" },
    // Add more navigation items with their respective routes
  ];
  const navLinksD = [
    { id: 1, title: "Dashboard", route: "/dashboard" },
    // Add more navigation items with their respective routes
  ];

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            FarmAssist &nbsp;
            <span className="sm:block hidden"> | Plant Disease Classifier</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                location.pathname === nav.route
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={nav.route}>{nav.title}</Link>
            </li>
          ))}
          {/* forDashboard */}
          {token !== null && (
            <Link to="/Dashboard">
              {navLinksD.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    location.pathname === nav.route
                      ? "text-white"
                      : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <Link
                    className=" bg-green-700 bg-opacity-50 hover:bg-green-700 px-4 py-2 text-white uppercase rounded text-xs "
                    to={nav.route}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </Link>
          )}

          {/* Login button */}
          {token === null && (
            <Link to="/login">
              <button className=" bg-red-700 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs ">
                Login
              </button>
            </Link>
          )}
          {/* DropdownStart */}
          {/* {token !== null && (
            <Link to="/login" className="flex items-center gap-2">
              <button
                onClick={logoutUser}
                className=" bg-red-700 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs "
              >
                LogOut
              </button>
            </Link>
          )} */}
          {token !== null && (
            <Dropdown label="Profile">
              <Dropdown.Header>
                <span className="block text-sm"> {user.username}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard">
                <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
              </Link>
              <Link to="/profile">
                <Dropdown.Item icon={HiCog}>Profile</Dropdown.Item>
              </Link>

              <Dropdown.Divider />
              <Dropdown.Item icon={HiLogout}>
                <Link to="/login">
                  <button
                    onClick={logoutUser}
                    className=" bg-red-700 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs "
                  >
                    LogOut
                  </button>
                </Link>
              </Dropdown.Item>
            </Dropdown>
          )}
          {/* DropdownEND */}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
