import axios from "axios";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Role } from "../../models/role";
import { Link } from "react-router-dom";

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`roles`);
      setRoles(data);
    })();
  }, [page]);

  const next = () => {
    if (page <= lastPage) {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  const del = async (id: number) => {
    if (window.confirm("Are you sure to deleted this data")) {
      await axios.delete(`roles/${id}`);
      setRoles(roles.filter((u: Role) => u.id !== id));
    }
  };

  return (
    <Wrapper>
      <h2>Roles</h2>

      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={"/roles/create"} className="btn btn-outline-primary">
          Add Roles
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role: Role) => {
              return (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link
                        to={`/roles/${role.id}/edit`}
                        className="btn btn-outline-primary"
                      >
                        Edit
                      </Link>
                      <a
                        href="#"
                        className="btn btn-outline-danger"
                        onClick={() => del(role.id)}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prev}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link" onClick={next}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Roles;
