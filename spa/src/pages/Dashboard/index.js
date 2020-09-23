import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

import api from "../../services/api";

import { Container, Title, BoxContainer, Column, Row } from "./styles";

import MainTable from "../../components/MainTable";
import TotalYearTable from "../../components/TotalYearTable";
import YearSelector from "../../components/YearSelector";
import TotalMonthPieChart from "../../components/TotalMonthPieChart";
import Loading from "../../components/Loading";
import ErrorScreen from "../../components/ErrorScreen";

function Dashboard() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [movimentos, setMovimentos] = useState([]);
  const [totalAnual, setTotalAnual] = useState([]);
  const [totalMonthly, setTotalMonthly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    show: false,
    status: 0,
    title: "",
    message: "",
  });

  useEffect(() => {
    getResponse();
    // console.log()
  }, []);

  const getResponse = async () => {
    // alert("get response");
    try{
      await api
      .post("/dashboard", { ano: 2020 })
      .then((response) => {
        // console.log(response.data);
        setMovimentos(response.data.movimentos);
        setTotalAnual(response.data.totalAnual);
        setTotalMonthly(response.data.totalMensal);

        setLoading(false);
        // setTotalMonthly(response.data.totalMensal);
      })
    }
    catch (err) {
      console.log(err.response);
      console.log(err);
      setError({
        show: true,
        status: err.response.status,
        title: 'Something went wrong!',
        message: err.message
      })
      setLoading(false);
    }

    // setMovimentos(responseJSON.movimentos);
    // setTotalAnual(responseJSON.totalAnual);
    // setTotalMonthly(responseJSON.totalMensal);
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
      {error.show ? (
        <ErrorScreen status={error.status} title={error.title} message={error.message} />
      ) : (
        <>
          <Loading isLoading={loading} />
          <Row>
            <BoxContainer
              style={{ width: "85%", marginRight: 0, minWidth: 1083 }}
            >
              <Title>Movimentos</Title>
              <YearSelector
                value={year}
                onClickLeft={() => setYear(year - 1)}
                onClickRight={() => setYear(year + 1)}
              />
              <MainTable movimentos={movimentos} />
            </BoxContainer>
            <Column>
              <BoxContainer style={{ marginBottom: 0, minWidth: 220 }}>
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
                <TotalMonthPieChart totalMonthly={totalMonthly} month={month} />
              </BoxContainer>
            </Column>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
