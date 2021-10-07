import styled, { css } from 'styled-components';
import { color } from '../../../style';

export const Info = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${color.background};
  padding: calc(50vh - 150px) 0px;
`;

export const InfoModal = styled.div`
  width: 500px;
  height: 300px;
  margin: 0px auto;
  background-color: white;
  padding-top: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${color.main};
`;

export const Explain = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 50px;
  height: 30px;
  border: 1px solid ${color.main};
  border-radius: 5px;
  text-align: center;
`;

export const InputLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    > p {
      font-size: 16px;
    }
  }
`;

export const InfoBtn = styled.div`
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.main};
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 5px;
`;
