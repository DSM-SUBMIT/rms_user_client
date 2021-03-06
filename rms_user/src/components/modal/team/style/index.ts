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

export const ProjectTeam = styled.div`
  width: 281px;
  height: 400px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.div`
  width: 239px;
  height: 30px;
  background: #eeeeee;
  border-radius: 100px;
  padding: 2px 15px;
  margin-top: 25px;
  img {
    vertical-align: middle;
  }
`;

export const NameInput = styled.input`
  width: 182px;
  height: 19px;
  background: #eeeeee;
  border: none;
  margin-right: 10px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
`;

export const UserList = styled.div`
  width: 238px;
  height: 290px;
  margin-top: 17px;
  overflow: auto;
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${color.main};
  }
`;

export const UserBox = styled.div`
  width: 220px;
  height: 22px;
  border-bottom: 1px solid #cbcbcb;
  margin-bottom: 10px;
  padding-bottom: 13px;
`;

export const CheckBox = styled.input`
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-left: 7px;
`;

export const Name = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #000000;
  margin-left: 8px;
`;

export const Email = styled.span`
  font-family: Noto Sans KR;
  font-size: 10px;
  color: #000000;
  margin-left: 4px;
  margin-bottom: 8px;
`;

export const MemberBtn = styled.button`
  width: 80px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #5f5f5f;
`;
