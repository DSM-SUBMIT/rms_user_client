import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
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
  margin-top: 35px;
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
  height: 310px;
  margin-top: 17px;
`;

export const UserBox = styled.div`
  width: 238px;
  height: 22px;
  border-bottom: 0.3px solid #cbcbcb;
  margin-bottom: 10px;
`;

export const CheckBox = styled.div`
  width: 12px;
  height: 12px;
  background: rgba(196, 196, 196, 0.3);
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
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #000000;
  margin-left: 15px;
  margin-bottom: 10px;
`;
