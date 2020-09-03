import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  color: #7c7c7c;
  font-style: italic;
`;

export const BoxContainer = styled.div`
  margin: 20px;
  padding: 20px;
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    display: inline-flex;
    /* background-color: #f1f1f1; */
`;
