import React, { useRef, useState } from "react";
import "./../styling/hamburger.css";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import LogoDesk from "../images/logo-desk.png";
import LogoDeskWhite from "../images/logo-desk-white.png";
import { useLocation, Link, NavLink } from "react-router-dom";

export const HamburgerMenu = ({ className }) => {
  return (
    <header className={className == "headerLive" ? className : "header"}>
      <div className="mobile-header">
        <a
          href="https://www.finalshow.be/"
          style={{ display: "block", background: "none", margin: 0, height: 0 }}
        >
          <img src={LogoWhite} className="logo" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/livestream"}
            >
              LIVESTREAM
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/info"
            >
              INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/timetable"
            >
              TIMETABLE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="https://multimedia.brussels/"
              target="_blank"
            >
              SHOWCASE
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="desk-header">
        <a
          href="https://www.finalshow.be/"
          style={{
            display: "inline-block",
            background: "none",
            marginTop: "0px",
            marginLeft: "0px",
            }}
        >
          <img src={LogoDeskWhite} className="logo" />
        </a>
        <ul className="list-nav">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to={"/livestream"}
            >
              LIVESTREAM
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="/info"
            >
              INFO
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="/timetable"
            >
              TIMETABLE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeDesk" : "")}
              to="https://multimedia.brussels//"
              target="_blank"
            >
              SHOWCASE
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
