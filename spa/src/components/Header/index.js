import React from "react";
import { FaBars } from "react-icons/fa";

import { Container, LeftButton, RouteName } from "./styles";

function Header() {
  return (
    <Container>
      <LeftButton>
        <FaBars color="#000" size={18} />
      </LeftButton>
      <RouteName>Dashboard</RouteName>
    </Container>
  );
}

export default Header;
