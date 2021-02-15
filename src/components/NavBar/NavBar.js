import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar(props) {
  return (
    <div className="navBarContainer">
      <div className="navBarName">Joao Isabel - WebDeveloper</div>
      <div className="navBarLinks">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/aboutme">
          About
        </NavLink>
        <NavLink className="links" to="/myportfolio">
          My Portfolio
        </NavLink>
        <NavLink className="links" to="/contacts">
          Contacts
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
