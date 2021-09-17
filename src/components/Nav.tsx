import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { User } from "../models/users";
import { connect } from "react-redux";

const Nav = (props: { user: User }) => {
  const logout = async () => {
    await axios.post("logout", {});
  };

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
        ReactTS
      </a>
      <ul className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-white text-decoration-none" to={"/profile"}>
          {props.user.name}
        </Link>
        <Link
          className="p-2 text-white text-decoration-none"
          to={"/login"}
          onClick={logout}
        >
          Sign out
        </Link>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);
