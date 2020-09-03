import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { Container, Arrow, Input, Title, YearContainer } from "./styles";

function YearSelector({ value }) {
  return (
    <Container>
      <YearContainer>
        <Arrow>
          <FaCaretLeft color="#fff" />
        </Arrow>
        <Input type="text" value={value} />
        <Arrow>
          <FaCaretRight color="#fff" />
        </Arrow>
      </YearContainer>
    </Container>
  );
}

export default YearSelector;
