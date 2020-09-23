import React from "react";

import {
  Container,
  ContainerError,
  ErrorStatus,
  ErrorTitle,
  ErrorMessage,
  GoBackButton,
} from "./styles";

function ErrorScreen({ status, title, message }) {
  return (
    <Container>
      <ContainerError>
        <ErrorStatus>{status || "500"}</ErrorStatus>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorMessage>{message}</ErrorMessage>
        <GoBackButton onClick={() => window.location.reload()}>Try again</GoBackButton>
      </ContainerError>
    </Container>
  );
}

export default ErrorScreen;
