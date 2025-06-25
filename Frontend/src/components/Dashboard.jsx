import React from "react";
import { BsPinFill } from "react-icons/bs";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <nav id="navbar">
      <ul className="navbar_left">
        <li>
          <a href="">
            <BsPinFill />
          </a>
        </li>
        <li>
          <a href="">InspoWall</a>
        </li>
      </ul>
      <ul className="navbar_right">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
