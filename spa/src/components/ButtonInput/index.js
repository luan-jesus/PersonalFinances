import React from "react";

import { Container, Button } from "./styles";

function ButtonInput({ onClick }) {
  return (
    <Container>
      <Button onClick={onClick}>Confirmar</Button>
    </Container>
  );
}

export default ButtonInput;
