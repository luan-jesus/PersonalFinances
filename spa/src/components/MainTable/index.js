import React from "react";

import {
  Container,
  Table,
  THead,
  Tr,
  Td,
  TBody,
  TdCategory,
  TdTotal,
  TdValue,
} from "./styles";

function MainTable({ movimentos, reload = () => {} }) {
  // const movimentos = undefined;

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
      {movimentos ? (
        <>
          <Table>
            <THead>
              <Tr>
                <Td
                  style={{
                    width: "20%",
                    textAlign: "left",
                    fontSize: 15,
                    fontWeight: 600,
                    paddingLeft: 10,
                  }}
                  colSpan={2}
                >
                  Mês
                </Td>
                {months.map((month) => (
                  <Td
                    style={{ fontSize: 13, width: "6.66%" }}
                    key={Math.random()}
                  >
                    {month}
                  </Td>
                ))}
              </Tr>
              <Tr style={{ backgroundColor: "#fff", color: "#000" }}>
                <Td style={{ width: "20%" }} rowSpan={2}></Td>
                {months.map((month) => (
                  <Td
                    style={{ padding: 0, width: "6.66%" }}
                    key={Math.random()}
                  >
                    <div style={{ fontWeight: "bold" }}>valor</div>
                  </Td>
                ))}
              </Tr>
            </THead>
            <TBody>
              {movimentos.map((movimento) => {
                const categorias = movimento.categorias;
                return (
                  <>
                    <Tr>
                      <Td
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          border: "none",
                        }}
                      >
                        {movimento.tipoMovimento}
                      </Td>
                    </Tr>
                    {categorias.map((categoria) => {
                      const subcategorias = categoria.subcategorias;
                      return (
                        <>
                          <Tr>
                            <TdCategory style={{ width: "10%" }}>
                              {categoria.categoria}
                            </TdCategory>
                            <Td style={{ padding: 0 }}>
                              <Table style={{ padding: 0 }}>
                                {subcategorias.map((subcategoria) => {
                                  const total = subcategoria.total;
                                  return (
                                    <Tr>
                                      <TdValue
                                        style={{
                                          borderLeft: "none",
                                          width: "10%",
                                          textAlign: "left",
                                          paddingLeft: 5,
                                        }}
                                      >
                                        {subcategoria.subcategoria}
                                      </TdValue>
                                      {total.map((value) => {
                                        return (
                                          <TdValue style={{ width: "6.66%" }}>
                                            R${" "}
                                            {parseFloat(value)
                                              .toFixed(2)
                                              .toString()
                                              .replace(/\./g, ",")}
                                          </TdValue>
                                        );
                                      })}
                                    </Tr>
                                  );
                                })}
                                <Tr>
                                  <TdTotal
                                    style={{
                                      width: "10%",
                                      textAlign: "left",
                                      paddingLeft: 5,
                                    }}
                                  >
                                    Total
                                  </TdTotal>
                                  {categoria.total.map((value) => {
                                    return (
                                      <TdTotal style={{ width: "6.66%" }}>
                                        R${" "}
                                        {parseFloat(value)
                                          .toFixed(2)
                                          .toString()
                                          .replace(/\./g, ",")}
                                      </TdTotal>
                                    );
                                  })}
                                </Tr>
                              </Table>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td style={{ height: 0, padding: 3 }}></Td>
                          </Tr>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </TBody>
          </Table>
        </>
      ) : (
        <div>
          Erro: nenhum movimento encontrado
          <div onClick={reload}>Recarregar</div>
        </div>
      )}
    </Container>
  );
}

export default MainTable;
