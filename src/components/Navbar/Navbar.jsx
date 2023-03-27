import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--container">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="nav-icon"
          aria-label="Menu"
          id="navicon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;