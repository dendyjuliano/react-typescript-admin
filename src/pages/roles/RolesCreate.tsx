import React, { useState, useEffect, SyntheticEvent } from "react";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { Role } from "../../models/role";
import { Permission } from "../../models/permission";
import { Redirect } from "react-router";

const RolesCreate = () => {
  const [name, setName] = useState("");
  const [permission, setPermissions] = useState([]);
  const [selected, setSelected] = useState([] as number[]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("permissions");
      setPermissions(data);
    })();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    var permissions = selected.map(function (e) {
      return e.toString();
    });
    const data = {
      name,
      permissions,
    };
    // console.log(data);
    await axios.post("roles", data);
    setRedirect(true);
  };

  const check = (id: number) => {
    if (selected.some((s) => s === id)) {
      setSelected(selected.filter((s) => s !== id));
      return;
    }
    setSelected([...selected, id]);
  };

  if (redirect) {
    return <Redirect to={"/roles"} />;
  }

  return (
    <Wrapper>
      <h2>Add Roles</h2>
      <hr />

      <form onSubmit={submit}>
        <div className="mb-3 mt-3 row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Permission</label>
          <div className="col-sm-10">
            {permission.map((p: Permission) => {
              return (
                <div className="form-check form-check-inline col-3" key={p.id}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={p.id}
                    onChange={() => check(p.id)}
                  />
                  <label className="form-check-label">{p.name}</label>
                </div>
              );
            })}
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
      </form>
    </Wrapper>
  );
};

export default RolesCreate;
