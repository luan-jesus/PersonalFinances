import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* max-width: 1400px; */
`;

export const BoxContainer = styled.div`
  margin: 25px;
  padding: 20px;
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 12px;
  position: absolute;
  top: -20px;
  left: 0;
  color: #7c7c7c;
  font-style: italic;
  z-index: 0;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Table = styled.table`
  width: 600px;
  font-size: 14px;
  text-align: center;
`;

export const Tr = styled.tr`
  
`;

export const THead = styled.thead`
  border: 1px solid rgb(188, 188, 188);
  background-color: rgb(224, 224, 224);
`;
export const Td = styled.td`
  margin: 0;
  padding: 0;
  border: none;
`;
