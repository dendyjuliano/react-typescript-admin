import React, { useState, useEffect, SyntheticEvent } from "react";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { Role } from "../../models/role";
import { Redirect } from "react-router";

const RolesCreate = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role_id, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("roles");
      setRoles(data);
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    var role = parseInt(role_id);
    const data = {
      first_name,
      last_name,
      email,
      role_id: role,
    };
    await axios.post("users", data);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={"/users"} />;
  }

  return (
    <Wrapper>
      <h2>Add Roles</h2>
      <hr />

      <form onSubmit={submit}>
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
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            value={role_id}
            onChange={(e) => setRoleId(e.target.value)}
          >
            <option value="" disabled selected>
              -- SELECT ROLE --
            </option>
            {roles.map((r: Role) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
      </form>
    </Wrapper>
  );
};

export default RolesCreate;
