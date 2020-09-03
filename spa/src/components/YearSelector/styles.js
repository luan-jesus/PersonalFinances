import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Arrow = styled.div`
  padding: 5px 10px;
  background-color: #3d3d3d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition: all 0.25s;
  &:hover {
    background-color: #5b5b5b;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: none;
  width: 50px;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  background-color: #e0e0e0;
  font-weight: 400;
`;

export const Title = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const YearContainer = styled.div`
  display: flex;
`;
