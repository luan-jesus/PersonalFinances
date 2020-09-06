import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ValueColor = styled.div`
  width: 15px;
  height: 15px;
`;

export const Value = styled.div`
  margin-left: 15px;
  font-size: 14px;
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