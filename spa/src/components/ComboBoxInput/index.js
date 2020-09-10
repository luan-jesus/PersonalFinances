import React from "react";

import { Container, Title, Select, Option } from "./styles";

function ComboBoxInput({
  name = "",
  onChange = (event) => {},
  title = "",
  data = [],
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Select name={name} onChange={onChange}>
        {data.map((field) => (
          <Option value={field.id}>{field.nome}</Option>
        ))}
      </Select>
    </Container>
  );
}

export default ComboBoxInput;
