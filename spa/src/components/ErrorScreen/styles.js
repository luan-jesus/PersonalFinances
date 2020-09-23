import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const ContainerError = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ErrorStatus = styled.h2`
  color: #7c7c7c;
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  padding: 0;
  line-height: 1;
`;

export const ErrorTitle = styled.h3`
  font-weight: 500;
  color: #5B5B5B;
  margin-bottom: 20px;
  font-size: 26px;
`;
export const ErrorMessage = styled.p`
  color: #7c7c7c;
  margin-bottom: 30px;
  font-size: 20px;
`;
export const GoBackButton = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  display: inline;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: #3D3D3D;
  }
`;