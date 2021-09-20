import styled from 'styled-components';
import { color } from '../../../style';

export const Login = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${color.background};
  padding: calc(50vh - 150px) 0px;
`;

export const LoginModal = styled.div`
  width: 500px;
  height: 300px;
  margin: 0px auto;
  background-color: white;
  padding-top: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.p`
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
  margin-top: 30px;
`;

export const SchoolEmailLogin = styled.p`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  margin-top: 16px;
`;

export const LoginBtn = styled.div`
  width: 262px;
  height: 40px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.main};
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
