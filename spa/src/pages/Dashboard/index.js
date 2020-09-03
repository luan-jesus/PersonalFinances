import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Container, Title, BoxContainer, Column, Row } from "./styles";

import MainTable from "../../components/MainTable";
import TotalYearTable from "../../components/TotalYearTable";
import YearSelector from "../../components/YearSelector";

function Dashboard() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(0);
  const [movimentos, setMovimentos] = useState([]);
  const [totalAnual, setTotalAnual] = useState([]);
  const responseJSON = require("../../response.json");

  useEffect(() => {
    // getResponse();
    setMovimentos(responseJSON.movimentos);
    setTotalAnual(responseJSON.totalAnual)
    console.log()
  }, []);

  const getResponse = async () => {
    // alert("get response");
    await api.post("/dashboard", { ano: 2020 }).then((response) => {
      console.log(response.data);
      setMovimentos(response.data.movimentos);
    });
  };

  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  return (
    <Container>
      <Row>
        <BoxContainer style={{ width: "70%", marginRight: 0, minWidth: 1060 }}>
          <Title>Movimentos</Title>
          <YearSelector
            value={year}
            onClickLeft={() => setYear(year - 1)}
            onClickRight={() => setYear(year + 1)}
          />
          <MainTable movimentos={movimentos} />
        </BoxContainer>
        <Column style={{ width: 350 }}>
          <BoxContainer style={{ marginBottom: 0 }}>
            <Title>Total anual</Title>
            <TotalYearTable totalAnual={totalAnual} />
          </BoxContainer>
          <BoxContainer>
            <Title>Total mensal</Title>
            <YearSelector
              value={months[month]}
              onClickLeft={() => {
                if (month === 0) {
                  setMonth(11);
                } else {
                  setMonth(month - 1);
                }
              }}
              onClickRight={() => {
                if (month === 11) {
                  setMonth(0);
                } else {
                  setMonth(month + 1);
                }
              }}
            />
            <div style={{ width: 200, height: 200 }}></div>
          </BoxContainer>
        </Column>
      </Row>

    </Container>
  );
}

export default Dashboard;
