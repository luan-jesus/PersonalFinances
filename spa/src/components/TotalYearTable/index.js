import React from "react";

import {
  Container,
  LeftContainer,
  Row,
  Month,
  RightContainer,
  MonthName,
  ValorLabel,
  TypeMov,
  Category,
  CategoryContainer,
  Hr,
  MonthValue,
  Total,
} from "./styles";

function TotalYearTable({ totalAnual }) {
  console.log(totalAnual);
  return (
    <Container>
      <Row>
        <LeftContainer>
          <Row
            style={{
              borderTop: "1px solid #bcbcbc",
              borderLeft: "1px solid #bcbcbc",
              borderBottom: "1px solid #bcbcbc",
              backgroundColor: "#e0e0e0",
              borderTopLeftRadius: 1,
              borderBottomLeftRadius: 2,
            }}
          >
            <Month>Categoria</Month>
          </Row>
          <Row style={{ height: 21, margin: 0, padding: "0.375px 0" }}></Row>

          {totalAnual
            ? totalAnual.map((total) => {
                return (
                  <div key={Math.random()}>
                    <CategoryContainer>
                      <Category>{total.nome}</Category>
                    </CategoryContainer>
                    <Hr />
                  </div>
                );
              })
            : null}
        </LeftContainer>
        <RightContainer>
          {/* Header */}
          <Row
            style={{
              borderTop: "1px solid #bcbcbc",
              borderRight: "1px solid #bcbcbc",
              borderBottom: "1px solid #bcbcbc",
              backgroundColor: "#e0e0e0",
              padding: "0.5px 0",
              borderTopRightRadius: 1,
              borderBottomRightRadius: 2,
            }}
          >
            <MonthName key={Math.random()}>Total</MonthName>
          </Row>
          <Row>
            <ValorLabel key={Math.random()}>Valor</ValorLabel>
          </Row>
          {totalAnual
            ? totalAnual.map((total) => {
                return (
                  <div key={Math.random()}>
                    <Total
                      key={Math.random()}
                      style={{ justifyContent: "center" }}
                    >
                      R${" "}
                      {parseFloat(total.valor)
                        .toFixed(2)
                        .toString()
                        .replace(/\./g, ",")}
                    </Total>
                    <Hr />
                  </div>
                );
              })
            : null}
        </RightContainer>
      </Row>
    </Container>
  );
}

export default TotalYearTable;
