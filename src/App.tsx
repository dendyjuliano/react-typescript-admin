import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/users/Users";
import UsersCreate from "./pages/users/UsersCreate";
import UsersEdit from "./pages/users/UsersEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} component={Dashboard} exact />
        <Route path={"/register"} component={Register} />
        <Route path={"/login"} component={Login} />
        <Route path={"/users"} exact component={Users} />
        <Route path={"/users/create"} component={UsersCreate} />
        <Route path={"/users/:id/edit"} component={UsersEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
