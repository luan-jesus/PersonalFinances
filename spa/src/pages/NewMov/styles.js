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
  width: 800px;
  font-size: 13px;
  text-align: center;
  border-collapse: collapse;
  margin: 1px;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  height: 15px;
`;

export const THead = styled.thead`
  display: block;

  & > tr {
    background-color: #3D3D3D;
    color: #fff;
    display: table;
    width: 100%;
  }

  & > tr > td {
    font-size: 13px;
    padding: 5px 5px;
    width: 20%;

    &:hover {
      background-color: #000;
      cursor: pointer;
    }
  }
`;

export const TBody = styled.tbody`
  display: block;

  & > tr {
    width: 100%;
    display:table;
    &:hover {
      background-color: #f1f1f1;
      cursor: pointer;
    }
  }

  & > tr > td {
    width: 20%;
    padding: 6px 10px;
    border: 1px solid #c4c4c4;
    border-top: none;
    font-size: 13px;
    text-align: left;
  }
`;

export const TableContainer = styled.div`

`;

export const SearchBox = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchSubmit = styled.div`
  background-color: #3D3D3D;
  padding: 0 30px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  display: flex;
  align-items: center;
  height: 30px;

  &:hover {
    cursor: pointer;
    background-color: #000;
  }

  &:focus {
    outline: none;
  }
`;

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;
  color: #7a7a7a;
`;

export const TableFooterMessages = styled.div`

`;

export const TableFooterPagination = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
`;

export const TableFooterPaginationIcon = styled.div`
  padding: 2px;
  margin: 2px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: #000;
  }
`;

export const TableFooterPaginationInput = styled.input`
  width: 20px;
  font-size: 12px;
  margin: 0 5px;
  flex: 1;
  border: 1px solid #c4c4c4;
  padding: 4px;
  border-radius: 5px;
`;

export const ClearFilter = styled.div`
  font-size: 12px;
  color: #7a7a7a;
  user-select: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 5px;

  &:hover  {
    cursor: pointer;
    color: #000;
  }
`;