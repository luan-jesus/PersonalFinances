import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 20%;
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
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  padding: .5px 0;
`;

export const MonthName = styled.div`
  flex: 1;
  justify-content: center;
  font-size: 14px;
  display: flex;
  padding: 1.5px 0;
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
  font-size: 12px;
  font-weight: 700;
  display: flex;
`;

export const Category = styled.div`
  background-color: #3d3d3d;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 50%;
  font-size: 17px;
  display: flex;
  align-items: center;
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
  font-size: 18px;
  font-weight: 700;
`;

export const Total = styled.div`
  font-size: 12px;
  font-weight: 700;
  border-top: 1px solid #8e8e8e;
  flex: 1;
  display: flex;
  background-color: #e0e0e0;
  align-items: center;
  height: 21px;
`;

export const Hr = styled.div`
  height: 5px;
`;