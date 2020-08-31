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
  Hr
} from "./styles";

function MainTable() {
  const response = require("../../response.json");
  console.log(response);
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
      <LeftContainer>
        <Row
          style={{
            borderTop: "1px solid #8e8e8e",
            borderLeft: "1px solid #8e8e8e",
            borderBottom: "1px solid #8e8e8e",
            backgroundColor: "#e0e0e0",
          }}
        >
          <Month>Mês</Month>
        </Row>
        <Row style={{ height: 21, margin: 0, padding: "0.375px 0" }}></Row>



        <Row>
          <TypeMov>Entradas</TypeMov>
        </Row>
        <CategoryContainer>
          <Category>Receitas</Category>
          <SubcategoryContainer>
            <Row>
              <Subcategory>Salário</Subcategory>
            </Row>
            <Row>
              <Subcategory>Freelances</Subcategory>
            </Row>
            <Row>
              <Subcategory>Outros</Subcategory>
            </Row>
            <Row>
              <Total style={{ paddingLeft: 2 }}>Total</Total>
            </Row>
          </SubcategoryContainer>
        </CategoryContainer>
        <Hr />
        <CategoryContainer>
          <Category>Receitas</Category>
          <SubcategoryContainer>
            <Row>
              <Subcategory>Salário</Subcategory>
            </Row>
            <Row>
              <Subcategory>Freelances</Subcategory>
            </Row>
            <Row>
              <Subcategory>Outros</Subcategory>
            </Row>
            <Row>
              <Total style={{ paddingLeft: 2 }}>Total</Total>
            </Row>
          </SubcategoryContainer>
        </CategoryContainer>
        <Hr />
        <CategoryContainer>
          <Category>Receitas</Category>
          <SubcategoryContainer>
            <Row>
              <Subcategory>Salário</Subcategory>
            </Row>
            <Row>
              <Subcategory>Freelances</Subcategory>
            </Row>
            <Row>
              <Subcategory>Outros</Subcategory>
            </Row>
            <Row>
              <Total style={{ paddingLeft: 2 }}>Total</Total>
            </Row>
          </SubcategoryContainer>
        </CategoryContainer>
        <Row>
          <TypeMov>Entradas</TypeMov>
        </Row>
        <CategoryContainer>
          <Category>Receitas</Category>
          <SubcategoryContainer>
            <Row>
              <Subcategory>Salário</Subcategory>
            </Row>
            <Row>
              <Subcategory>Freelances</Subcategory>
            </Row>
            <Row>
              <Subcategory>Outros</Subcategory>
            </Row>
            <Row>
              <Total style={{ paddingLeft: 2 }}>Total</Total>
            </Row>
          </SubcategoryContainer>
        </CategoryContainer>
        <Hr />
        <CategoryContainer>
          <Category>Receitas</Category>
          <SubcategoryContainer>
            <Row>
              <Subcategory>Salário</Subcategory>
            </Row>
            <Row>
              <Subcategory>Freelances</Subcategory>
            </Row>
            <Row>
              <Subcategory>Outros</Subcategory>
            </Row>
            <Row>
              <Total style={{ paddingLeft: 2 }}>Total</Total>
            </Row>
          </SubcategoryContainer>
        </CategoryContainer>
        <Hr />
        <CategoryContainer>
          <Category>Receitas</Category>
          <SubcategoryContainer>
            <Row>
              <Subcategory>Salário</Subcategory>
            </Row>
            <Row>
              <Subcategory>Freelances</Subcategory>
            </Row>
            <Row>
              <Subcategory>Outros</Subcategory>
            </Row>
            <Row>
              <Total style={{ paddingLeft: 2 }}>Total</Total>
            </Row>
          </SubcategoryContainer>
        </CategoryContainer>
      </LeftContainer>
      <RightContainer>
        {/* Header */}
        <Row
          style={{
            borderTop: "1px solid #8e8e8e",
            borderRight: "1px solid #8e8e8e",
            borderBottom: "1px solid #8e8e8e",
            backgroundColor: "#e0e0e0",
            padding: "0.5px 0",
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
        <Row style={{ padding: "0.85px 0" }}></Row>
        {/* Header */}
        <CategoryContainer style={{ flexDirection: "column" }}>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <Total key={Math.random()} style={{ justifyContent: "center" }}>
                R$ 58,44
              </Total>
            ))}
          </Row>
        </CategoryContainer>
        <Hr />
        <CategoryContainer style={{ flexDirection: "column" }}>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <Total key={Math.random()} style={{ justifyContent: "center" }}>
                R$ 58,44
              </Total>
            ))}
          </Row>
        </CategoryContainer>
        <Hr />
        <CategoryContainer style={{ flexDirection: "column" }}>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <Total key={Math.random()} style={{ justifyContent: "center" }}>
                R$ 58,44
              </Total>
            ))}
          </Row>
        </CategoryContainer>

        {/* Another mov type start here  */}

        <Row style={{ padding: "0.85px 0" }}></Row>
        <CategoryContainer style={{ flexDirection: "column" }}>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <Total key={Math.random()} style={{ justifyContent: "center" }}>
                R$ 58,44
              </Total>
            ))}
          </Row>
        </CategoryContainer>
        <Hr />
        <CategoryContainer style={{ flexDirection: "column" }}>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <Total key={Math.random()} style={{ justifyContent: "center" }}>
                R$ 58,44
              </Total>
            ))}
          </Row>
        </CategoryContainer>
        <Hr />
        <CategoryContainer style={{ flexDirection: "column" }}>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <MonthValue key={Math.random()}>R$ 19,48</MonthValue>
            ))}
          </Row>
          <Row>
            {months.map((month) => (
              <Total key={Math.random()} style={{ justifyContent: "center" }}>
                R$ 58,44
              </Total>
            ))}
          </Row>
        </CategoryContainer>
      </RightContainer>
    </Container>
  );
}

export default MainTable;
