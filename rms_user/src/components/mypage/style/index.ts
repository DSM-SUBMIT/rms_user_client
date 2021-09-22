import styled from 'styled-components';
import { color } from '../../../style';

export const MyPage = styled.div`
  width: 100%;
  height: 94vh;
  box-sizing: border-box;
  background-color: ${color.background};
  padding-top: 50px;
`;

export const Content = styled.div`
  width: 546px;
  height: 725px;
  border: 1px solid red;
  margin: 0 auto;
`;

export const InformationBox = styled.div`
  width: 546px;
  height: 70px;
  border: 1px solid blue;
  background-color: #ffffff;
  padding-top: 14px;
  border-radius: 5px;
`;

export const NameBox = styled.span`
  font-family: Noto Sans KR;
  font-size: 22px;
  font-weight: bold;
  margin-left: 49px;
`;

export const EmailBox = styled.span`
  font-family: Noto Sans KR;
  font-size: 15px;
  margin-left: 28px;
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
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
  img {
    vertical-align: middle;
  }
`;

export const Crate = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  vertical-align: middle;
  margin-left: 8px;
`;

export const ProjectList = styled.div`
  border: 1px solid black;
  margin-top: 16px;
  width: 525px;
  background-color: #ffffff;
`;
