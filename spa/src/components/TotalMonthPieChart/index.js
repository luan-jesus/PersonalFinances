import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

import {
  Container,
  ValueContainer,
  ValueColor,
  Value,
  Total,
  FloatValue,
} from "./styles";

function TotalMonthPieChart({ totalMonthly, month }) {

  const [total, setTotal] = useState(0);

  const updateTotal = (monthIndex) => {
    console.log(totalMonthly[monthIndex]);
    if (totalMonthly[monthIndex]) {
      totalMonthly[monthIndex].map((val) => {
        console.log(val.value);
        setTotal(total + val.value);
      });
    }
  };

  useEffect(() => {
    updateTotal(month);
    console.log(total);
  }, [])

  return (
    <Container>
      <PieChart
        data={totalMonthly[month]}
        // paddingAngle={10}
        labelPosition={50}
        animate={true}
      />
      <Total>
        <b>Total</b>
        <br />
        R$ {total}
      </Total>
      {totalMonthly[month]?.map((mov) => {
        return (
          <ValueContainer key={Math.random()}>
            <ValueColor style={{ backgroundColor: mov.color }} />
            <Value>
              {mov.title}
              <FloatValue>
                R${" "}
                {parseFloat(mov.value)
                  .toFixed(2)
                  .toString()
                  .replace(/\./g, ",")}
              </FloatValue>
            </Value>
          </ValueContainer>
        );
      })}
    </Container>
  );
}

export default TotalMonthPieChart;
