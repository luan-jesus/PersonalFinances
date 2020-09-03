import React from "react";

import {
  Container,
  LeftContainer,
  RightContainer,
  Month,
  MonthName,
  ValorLabel,
  Row,
  MonthValue,
  Category,
  SubcategoryContainer,
  Subcategory,
  TypeMov,
  Total,
  CategoryContainer,
  Hr,
} from "./styles";

function MainTable({movimentos, reload = () => {}}) {
  // const movimentos = undefined;

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <Container>
      {movimentos ? (
        <>
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
              <Month>Mês</Month>
            </Row>
            <Row style={{ height: 21, margin: 0, padding: "0.375px 0" }}></Row>

            {movimentos.map((movimento) => {
              const categorias = movimento.categorias;
              return (
                <div key={Math.random()}>
                  <Row>
                    <TypeMov>{movimento.tipoMovimento}</TypeMov>
                  </Row>
                  {categorias.map((categoria) => {
                    const subcategorias = categoria.subcategorias;
                    return (
                      <div key={Math.random()}>
                        <CategoryContainer>
                          <Category>{categoria.categoria}</Category>
                          <SubcategoryContainer>
                            {subcategorias.map((subcategoria) => {
                              return (
                                <Row key={subcategoria.id}>
                                  <Subcategory>
                                    {subcategoria.subcategoria}
                                  </Subcategory>
                                </Row>
                              );
                            })}
                            <Row>
                              <Total style={{ paddingLeft: 2 }}>Total</Total>
                            </Row>
                          </SubcategoryContainer>
                        </CategoryContainer>
                        <Hr />
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
              {months.map((month) => (
                <MonthName key={Math.random()}>{month}</MonthName>
              ))}
            </Row>
            <Row>
              {months.map((month) => (
                <ValorLabel key={Math.random()}>Valor</ValorLabel>
              ))}
            </Row>
            {/* Header */}

            {movimentos.map((movimento) => {
              const categorias = movimento.categorias;
              return (
                <div key={Math.random()}>
                  <Row style={{ padding: "0.85px 0", color: "#fff" }}>
                    Joia?
                  </Row>
                  {categorias.map((categoria) => {
                    const subcategorias = categoria.subcategorias;
                    return (
                      <div key={Math.random()}>
                        <CategoryContainer style={{ flexDirection: "column" }}>
                          {subcategorias.map((subcategoria) => {
                            return (
                              <Row>
                                {subcategoria.total.map((total) => (
                                  <MonthValue key={Math.random()}>
                                    R${" "}
                                    {parseFloat(total)
                                      .toFixed(2)
                                      .toString()
                                      .replace(/\./g, ",")}
                                  </MonthValue>
                                ))}
                              </Row>
                            );
                          })}
                          <Row>
                            {categoria.total.map((total) => {
                              return (
                                <Total
                                  key={Math.random()}
                                  style={{ justifyContent: "center" }}
                                >
                                  R${" "}
                                  {parseFloat(total)
                                    .toFixed(2)
                                    .toString()
                                    .replace(/\./g, ",")}
                                </Total>
                              );
                            })}
                          </Row>
                        </CategoryContainer>
                        <Hr />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </RightContainer>
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
