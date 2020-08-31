import React from "react";

import { Container, Title } from "./styles";

import MainTable from "../../components/MainTable";

function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <MainTable />
    </Container>
  );
}

export default Dashboard;
