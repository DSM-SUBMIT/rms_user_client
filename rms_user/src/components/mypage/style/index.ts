import styled from 'styled-components';
import { color } from '../../../style';

export const MyPage = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 94vh;
  box-sizing: border-box;
  background-color: ${color.background};
  padding-top: 50px;
`;

export const Content = styled.div`
  width: 546px;
  margin: 0 auto;
`;

export const InformationBox = styled.div`
  width: 546px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const NumberBox = styled.div`
  width: 40px;
  margin-left: 43px;
  z-index: 1;
  cursor: pointer;
`;

export const Number = styled.span`
  font-family: Noto Sans KR;
  font-size: 18px;
`;

export const NameBox = styled.span`
  font-family: Noto Sans KR;
  font-size: 22px;
  font-weight: bold;
  margin-left: 8px;
`;

export const EmailBox = styled.span`
  font-family: Noto Sans KR;
  font-size: 15px;
  margin-left: 18px;
`;

export const ProjectBox = styled.div`
  margin-top: 30px;
`;

export const Project = styled.span`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: bold;
`;

export const CreateBox = styled.div`
  width: 546px;
  height: 70px;
  border-radius: 5px;
  background-color: ${color.main};
  margin-top: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Crate = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
`;

export const ProjectList = styled.div`
  margin-top: 16px;
  width: 546px;
`;
