import { check } from 'prettier';
import styled from 'styled-components';
import { color } from '../../../../style';

export const SmallModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  margin: 0;
  padding: 0;
`;

export const ModifyBox = styled.div`
  width: 320px;
  height: 187px;
  background: #ffffff;
  border-radius: 10px;
  img {
    margin: 10px 0px 0px 290px;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-family: Noto Sans KR;
  text-align: center;
  font-size: 18px;
  color: #000000;
`;

export const ContentBox = styled.div`
  width: 260px;
  display: flex;
  margin: auto;
  margin-top: 18px;
  justify-content: space-between;
`;

export const ProjectBox = styled.div`
  width: 107px;
  height: 85px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding-top: 10px;
`;

export const ProjectText = styled.span`
  font-family: Noto Sans KR;
  font-size: 12px;
  color: #000000;
  margin: 18px 12px;
`;

export const ProjectBtn = styled.button`
  width: 65px;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  display: flex;
  padding: 0px 6px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 18px 22px;
  cursor: pointer;
`;

export const OtherBox = styled.div`
  width: 107px;
  height: 85px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding-top: 10px;
`;

export const OtherText = styled.span`
  font-family: Noto Sans KR;
  font-size: 12px;
  margin: 28px 25px;
  color: #000000;
`;

export const OtherBtn = styled.button`
  width: 65px;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border: none;
  margin: 18px 22px;
  padding: 0px 6px;
  cursor: pointer;
`;
