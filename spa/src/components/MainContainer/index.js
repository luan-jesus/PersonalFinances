import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Routes from '../../routes/routes';

import { Container, InnerContainer } from "./styles";

function MainContainer() {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <Routes />
      </InnerContainer>
      <Footer />
    </Container>
  );
}

export default MainContainer;
