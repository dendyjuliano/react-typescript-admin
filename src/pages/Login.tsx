import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await axios.post("login", data);

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="text-center">
      <div className="container p-5">
        <form className="form-signin" onSubmit={submit}>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>

          <label className="sr-only">Email address</label>
          <input
            type="email"
            className="form-control mt-2"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control mt-2"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            className="btn btn-lg btn-primary btn-block mt-5"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
