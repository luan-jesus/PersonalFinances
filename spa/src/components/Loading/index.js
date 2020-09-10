import React from "react";
import ReactLoading from "react-loading";

import { Container } from "./styles";

function Loading({ isLoading }) {
  return (
    <>
      {isLoading ? (
        <Container>
          <ReactLoading type="spinningBubbles" color="#fff" />
        </Container>
      ) : null}
    </>
  );
}

export default Loading;
