import React, { useState } from "react";

import { Container, Title, BoxContainer, Column, Row } from "./styles";

import MainTable from "../../components/MainTable";
import YearSelector from "../../components/YearSelector";

function Dashboard() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Container>
      <Row>
        <BoxContainer style={{ width: "70%", marginRight: 0, minWidth: 1060 }}>
          <YearSelector value={year} />
          <MainTable />
        </BoxContainer>
        <Column style={{ width: 350 }}>
          <BoxContainer style={{ marginBottom: 0 }}>
            <div style={{ width: 200, height: 200 }}></div>
          </BoxContainer>
          <BoxContainer>
            <YearSelector value={"Janeiro"} />
            <div style={{ width: 200, height: 200 }}></div>
          </BoxContainer>
        </Column>
      </Row>
    </Container>
  );
}

export default Dashboard;
