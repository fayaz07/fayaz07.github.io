import React from "react";
import "./Header.css";
// import logo from "../../assets/logo.png";
import Fade from "react-reveal";

export default function Header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="/" className="logo">
            <span className="logo-name">Mohammad Fayaz</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#home">About me</a>
            </li>
            <li>
              <a href="#opensource">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
