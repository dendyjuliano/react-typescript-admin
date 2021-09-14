import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link " to={"/"} exact>
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to={"/users"}>
              <span data-feather="home"></span>
              Users <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
