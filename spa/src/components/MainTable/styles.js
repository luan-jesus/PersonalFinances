import styled from "styled-components";

export const Container = styled.div`
  min-width: 1078px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

export const TdCategory = styled.td`
  background-color: #3d3d3d;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 14.28%;
  font-size: 14px;
  align-items: center;
  padding-left: 10px;
  color: #fff;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 13px;
  text-align: center;
  border-collapse: collapse;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  height: 5px;
`;

export const THead = styled.thead`
  display: block;

  & > tr {
    background-color: #3d3d3d;
    color: #fff;
    display: table;
    width: 100%;
  }

  & > tr > td {
    font-size: 13px;
    padding: 5px 5px;
    width: 7.14%;
  }
`;

export const TBody = styled.tbody`
  display: block;

  & > tr {
    width: 100%;
    display: table;
  }

  & > tr > td {
    padding: 6px 10px;
    border-top: none;
    font-size: 13px;
    text-align: left;
  }
`;

export const TdTotal = styled.td`
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #E0E0E0;
  border-top: 1px solid #c4c4c4;
  background-color: #E0E0E0;
  align-items: center;
  height: 21px;
`;


export const TdValue = styled.td`
  border: 1px solid #c4c4c4;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;
