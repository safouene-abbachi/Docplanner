import React from "react";
import logo from "C:/Users/acer/Desktop/projects/docplanner_clone/src/pictures/docplanner.svg";

const Header = () => (
  <div className="header">
    <a className="header_item" href="#">
      <img className="header_logo" src={logo}></img>
    </a>
    <ul className="header-menu">
      <li className="header-menu-list">
        <a href="#">
          <p>About us</p>
        </a>
      </li>
      <li className="header-menu-list">
        <a href="#">
          <p>Career</p>
        </a>
      </li>
      <li className="header-menu-list">
        <a href="#">
          <p>Departments</p>
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
