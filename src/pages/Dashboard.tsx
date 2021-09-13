import React, { Component } from "react";
import Wrapper from "../components/Wrapper";

interface DashboardProps {}

interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
  }
  render() {
    return (
      <Wrapper>
        <h1>Dashboard</h1>
      </Wrapper>
    );
  }
}

export default Dashboard;
