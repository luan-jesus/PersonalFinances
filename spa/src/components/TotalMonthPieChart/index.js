import React, {useState} from "react";
import { PieChart } from "react-minimal-pie-chart";

import { Container, ValueContainer, ValueColor, Value, Total } from "./styles";

function TotalMonthPieChart({totalMonthly, month}) {
  const [thisMonth, setThisMonth] = useState([]);

  const total = (monthIndex) => {
    var tot = 0;

    if (totalMonthly[monthIndex])
      totalMonthly[monthIndex].map(val => tot = tot + val.value);
      

    return tot;
  }

  return (
    <Container>
      <PieChart
        data={totalMonthly[month]}
        // paddingAngle={10}
        labelPosition={50}
        animate={true}
      />
      <Total><b>Total</b><br />R$ {total()}</Total>
      <ValueContainer>
        <ValueColor style={{backgroundColor: '#C13C37'}} />
        <Value>Investimentos</Value>
      </ValueContainer>
      <ValueContainer>
        <ValueColor style={{backgroundColor: '#6A2135'}} />
        <Value>Saídas</Value>
      </ValueContainer>
      <ValueContainer>
        <ValueColor style={{backgroundColor: '#423123'}} />
        <Value>Saldo</Value>
      </ValueContainer>
    </Container>
  );
}

export default TotalMonthPieChart;