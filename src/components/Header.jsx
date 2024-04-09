import React from "react";
import "../styles/Header.css";
import XiotaLogo from "../images/XIOTA-Logo.ico";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="containeer">
      <div className="navbar">
        <img src={XiotaLogo} alt="" className="Logo"></img>
        <h1 className="cname">XIOTA INDIA PVT LTD</h1>
        <ul>
          <li>HOME</li>

          <Link to="/login">
            <li>LOGIN</li>
          </Link>
          <li>SIGN UP</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
