import axios from "axios";
import React, { SyntheticEvent, useState, useEffect, Dispatch } from "react";
import Wrapper from "../components/Wrapper";
import { connect } from "react-redux";
import { User } from "../models/users";
import { setUser } from "../redux/actions/setUserAction";

const Profile = (props: { user: User; setUser: (user: User) => void }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  useEffect(() => {
    setFirstName(props.user.first_name);
    setLastName(props.user.last_name);
    setEmail(props.user.email);
  }, [props.user]);

  const submitAccount = async (e: SyntheticEvent) => {
    e.preventDefault();
    const sendData = {
      first_name,
      last_name,
      email,
    };

    const { data } = await axios.put("user/info", sendData);

    props.setUser(
      new User(data.id, data.first_name, data.last_name, data.email, data.role)
    );
  };

  const submitPassword = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      password,
      password_confirm,
    };

    await axios.put("user/password", data);
  };

  return (
    <Wrapper>
      <h3>Account Information</h3>
      <form onSubmit={submitAccount}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>

      <h3 className="mt-4">Chang Password</h3>
      <form onSubmit={submitPassword}>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password Confirm</label>
          <input
            type="password"
            className="form-control"
            value={password_confirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary mb-5">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setUser: (user: User) => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
