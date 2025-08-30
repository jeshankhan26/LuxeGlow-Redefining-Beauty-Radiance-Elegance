// Navlinks.jsx
import React from "react";
import { NavLink } from "react-router";

const Navlinks = () => {
  // Function to apply classes based on active link
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 transition-colors duration-200 ${
      isActive
        ? "text-[#B76E79] font-semibold border-b-2 border-[#B76E79]"
        : "text-[#333333] hover:text-[#B76E79]"
    }`;

  return (
    <>
      <li>
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className={linkClasses}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={linkClasses}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default Navlinks;
