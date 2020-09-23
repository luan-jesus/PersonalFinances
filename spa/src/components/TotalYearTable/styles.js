import styled from 'styled-components';

export const Container = styled.div`
`;

export const LeftContainer = styled.div`
  width: 60%;
`;

export const RightContainer = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
`;

export const Month = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-left: 10px;
  padding: 2.5px 0;
`;

export const MonthName = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  display: flex;
  padding: 2px 0;
`;

export const MonthValue = styled.div`
  flex: 1;
  justify-content: center;
  transition: all 0.25s;
  font-size: 12px;
  display: flex;
  padding: 2px 0;
  color: #8e8e8e;
  border-top: 1px solid #8e8e8e;
  border-right: 1px solid #8e8e8e;
  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
`;

export const ValorLabel = styled.div`
  flex: 1;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  display: flex;
`;

export const Category = styled.div`
  background-color: #3d3d3d;
  height: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 3px 0;
  padding-left: 10px;
  color: #fff;
`;
export const CategoryContainer = styled.div`
  display: flex;
  flex: 1;
  /* margin: 5px 0; */
`;

export const SubcategoryContainer = styled.div`
  flex: 1;
  width: 50%;
`;

export const Subcategory = styled.div`
  flex: 1;
  font-size: 12px;
  display: flex;
  padding: 2px 0 2px 2px;
  border-top: 1px solid #8e8e8e;
  border-right: 1px solid #8e8e8e;
`;

export const TypeMov = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const Total = styled.div`
  font-size: 12px;
  flex: 1;
  display: flex;
  background-color: #e0e0e0;
  align-items: center;
  padding: 3px 0;
  height: 20px;
`;

export const Hr = styled.div`
  height: 5px;
`;


export const Table = styled.table`
  width: 100%;
  font-size: 13px;
  text-align: center;
  border-collapse: collapse;
  margin: 1px;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  height: 10px;
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
    width: 50%;

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
    width: 50%;
    padding: 6px 10px;
    border: 1px solid #c4c4c4;
    border-top: none;
    font-size: 13px;
    text-align: left;
  }
`;