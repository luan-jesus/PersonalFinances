import React from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { getRouteName } from "../../services/helper";
import { Container, LeftButton, RouteName } from "./styles";

function Header({ updateSidebarCollapsed }) {
  return (
    <Container>
      <LeftButton onClick={updateSidebarCollapsed}>
        <FaBars color="#000" size={18} />
      </LeftButton>
      <RouteName>{getRouteName(useLocation().pathname)}</RouteName>
    </Container>
  );
}

export default Header;
