import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content grows to take available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default Root;
