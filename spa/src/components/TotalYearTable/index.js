import React from "react";

import {
  Container,
  LeftContainer,
  Row,
  Month,
  RightContainer,
  MonthName,
  ValorLabel,
  Category,
  CategoryContainer,
  Hr,
  Total,
  Table,
  THead,
  TBody,
  Tr,
  Td,
} from "./styles";

function TotalYearTable({ totalAnual }) {
  // console.log(totalAnual);
  return (
    <Container>
      <Table cellSpacing={0}>
        <THead>
          <Tr>
            <Td>Categoria</Td>
            <Td>Total</Td>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td
              style={{
                borderBottom: "1px solid #c4c4c4",
                borderLeft: "none",
                borderRight: "none",
                padding: 3,
              }}
            ></Td>
          </Tr>
          {totalAnual
            ? totalAnual.map((total) => {
                return (
                  <Tr key={Math.random()}>
                    <Td>{total.nome}</Td>
                    <Td style={{textAlign: 'center'}}>R${" "}
                      {parseFloat(total.valor)
                        .toFixed(2)
                        .toString()
                        .replace(/\./g, ",")}</Td>
                  </Tr>
                );
              })
            : null}
        </TBody>
      </Table>
    </Container>
  );
}

export default TotalYearTable;
