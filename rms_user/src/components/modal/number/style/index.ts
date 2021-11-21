import styled from 'styled-components';
import { color } from '../../../../style';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
`;

export const Box = styled.div`
  position: relative;
  width: 355px;
  height: 208px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    margin: 10px 0px 0px 303px;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${color.main};
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 185px;
  height: 48px;
  margin: 22px 0px 0px 4px;
  font-size: 18px;
  border: none;
  text-align: center;
  color: #386bee;
  background-color: #fbfbfb;
`;

export const Modify = styled.button`
  width: 60px;
  height: 35px;
  text-align: center;
  background-color: #386bee;
  color: #ffffff;
  font-size: 15px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 15px 0px 0px 3px;
`;
