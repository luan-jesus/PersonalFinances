import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fff;
  padding: 15px 12px;
  font-size: 14px;
  box-shadow: 0px 0px 60px -22px rgba(0,0,0,0.75);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  color: #000;
  z-index: 1;
`;

export const LeftButton = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 12px;
  transition: all .25s;
  &:hover {
    background-color: #5B5B5B;
    cursor: pointer;
  }
`;

export const RouteName = styled.div`
  font-size: 18px;
`;