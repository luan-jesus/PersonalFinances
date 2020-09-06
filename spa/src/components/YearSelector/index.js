import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { Container, Arrow, Input, YearContainer } from "./styles";

function YearSelector({ value, onClickLeft = () => {}, onClickRight = () => {} }) {
  return (
    <Container>
      <YearContainer>
        <Arrow onClick={onClickLeft}>
          <FaCaretLeft color="#fff" />
        </Arrow>
        <Input type="text" value={value} readOnly={true} />
        <Arrow onClick={onClickRight}>
          <FaCaretRight color="#fff" />
        </Arrow>
      </YearContainer>
    </Container>
  );
}

export default YearSelector;
