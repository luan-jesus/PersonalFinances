import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 2px 0;
`;

export const ValueColor = styled.div`
  width: 15px;
  height: 15px;
`;

export const Value = styled.div`
  margin-left: 15px;
  font-size: 12px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Total = styled.div`
  margin: 5px 0 10px;
  font-size: 14px;
  align-self: center;
  text-align: center;
  
  & > b {
    font-size: 13px;
  }
`;

export const FloatValue = styled.div`
  text-align: right;
  font-size: 12px;
`;