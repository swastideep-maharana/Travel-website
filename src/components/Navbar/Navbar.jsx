import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between">
              <p>20% off on next booking</p>
              <p>Mobile No. +91 123456789</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={logoImg} alt="Logo" className="h-16" />
              </Link>
            </div>
            {/* Desktop NavLinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown section */}
                <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Book now button */}
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-1000 text-white px-3 py-1 rounded-full">
                Book Now
              </button>
              {/* Mobile hamburger menu */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Responsive menu for mobile */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
