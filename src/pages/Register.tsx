import React, { Component } from "react";

interface RegisterProps {}

interface RegisterState {}

class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
  }
  render() {
    return (
      <div className="text-center">
        <div className="container p-5">
          <form className="form-signin">
            <img
              className="mb-4"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mt-2"
              placeholder="Email address"
              required
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
  }
}

export default Register;
