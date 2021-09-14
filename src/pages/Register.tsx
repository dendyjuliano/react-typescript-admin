import React, { Component, SyntheticEvent } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

interface RegisterProps {}

interface RegisterState {
  formData: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirm: string;
  };
  redirect: boolean;
}

class Register extends Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirm: "",
      },
      redirect: false,
    };
  }
  submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("register", this.state.formData);

    this.setState({
      redirect: true,
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="text-center">
        <div className="container p-5">
          <form className="form-signin" onSubmit={this.submit}>
            <img
              className="mb-4"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            <label className="sr-only">First Name</label>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="First Name"
              required
              onChange={(e) =>
                (this.state.formData.first_name = e.target.value)
              }
            />
            <label className="sr-only">Last Name</label>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Last Name"
              required
              onChange={(e) => (this.state.formData.last_name = e.target.value)}
            />
            <label className="sr-only">Email address</label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Email address"
              required
              onChange={(e) => (this.state.formData.email = e.target.value)}
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
              onChange={(e) => (this.state.formData.password = e.target.value)}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password Confirm
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mt-2"
              placeholder="Password Confirm"
              required
              onChange={(e) =>
                (this.state.formData.password_confirm = e.target.value)
              }
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
