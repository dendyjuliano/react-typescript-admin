import React, { Component } from "react";
import Wrapper from "../components/Wrapper";

interface UsersProps {}

interface UsersState {}

class Users extends React.Component<UsersProps, UsersState> {
  constructor(props: UsersProps) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <h2>Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default Users;
