import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link " to={"/"}>
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={"/users"}>
              <span data-feather="home"></span>
              Users <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
