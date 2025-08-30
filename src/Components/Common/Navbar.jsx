// Navbar.jsx
import React from "react";
import Navlinks from "./Navlinks";
import logo from "../../../public/Img/logo.png"

const Navbar = () => {
  return (
    <div className="navbar shadow-sm md:px-10">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow rounded-box w-52"
          >
            <Navlinks />
          </ul>
        </div>
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Center links (hidden on mobile) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-[#333333] italic">
          <Navlinks />
        </ul>
      </div>
      

      {/* Right side button */}
      <div className="navbar-end md:gap-3">
        <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs bg-[#B76E79] border-none indicator-item">0</span>
      </div>
    </button>
        <a className="btn bg-[#B76E79] border-none rounded-lg italic">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
