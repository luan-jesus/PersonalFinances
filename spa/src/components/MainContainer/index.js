import React, { useState, useCallback } from "react";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../routes/routes";

import { Container, InnerContainer } from "./styles";

function MainContainer() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const updateSidebarCollapsed = useCallback(() => {
    setSidebarCollapsed(!sidebarCollapsed);
    console.log(sidebarCollapsed);
  }, [sidebarCollapsed]);

  return (
    <BrowserRouter>
      <Sidebar sidebarCollapsed={sidebarCollapsed} />
      <Container>
        <Header updateSidebarCollapsed={updateSidebarCollapsed} />
        <InnerContainer>
          <Routes />
        </InnerContainer>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default MainContainer;
