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
  width: 480px;
  height: 387px;
  background: #ffffff;
  border-radius: 10px;
`;

export const Top = styled.div`
  img {
    margin: 14px 0px 0px 449px;
    cursor: pointer;
  }
`;

export const ContentBox = styled.div`
  width: 400px;
  margin: auto;
  margin-top: 8px;
`;

export const GitBox = styled.div`
  width: 100%;
  height: 180px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const GithubBox = styled.div`
  width: auto;
  height: 28px;
  img {
    margin: 0;
    vertical-align: middle;
  }
`;

export const GitText = styled.span`
  font-size: 12px;
  color: #000000;
  margin-top: 0;
`;

export const GitInput = styled.input`
  width: 95%;
  height: 28px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  display: flex;
  padding: 0px 4px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 0px 8px;
  ::placeholder {
    color: #aaaaaa;
  }
`;

export const GitListBox = styled.div`
  height: 112px;
  overflow: auto;
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${color.main};
  }
`;

export const GitAddressBox = styled.div`
  width: 95%;
  height: 22px;
  background: #386bee;
  border-radius: 5px;
  margin-bottom: 4px;
  margin-left: 10px;
  display: flex;
  padding: 2px 8px;
  justify-content: space-between;
  span {
    font-size: 10px;
    display: flex;
    color: #ffffff;
  }
  img {
    width: 8px;
    height: 8px;
    vertical-align: middle;
    margin-top: 4px;
    cursor: pointer;
  }
`;

export const Address1Box = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 10px;
`;

export const GuitarBox = styled.div`
  width: 100%;
  height: 98px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 18px 15px;
`;

export const AddressInputBox = styled.input`
  width: 288px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 11px;
  font-size: 10px;
  padding: 5px 4px;
  ::placeholder {
    color: #aaaaaa;
  }
  margin-bottom: 10px;
  :last-child {
    margin-left: 20px;
  }
`;

export const GuitarText = styled.p`
  font-size: 8px;
  text-align: center;
  color: #5f5f5f;
  display: inline-block;
`;

export const UploadBtn = styled.button`
  width: 65px;
  height: 28px;
  border: none;
  background: #386bee;
  border-radius: 5px;
  font-size: 12px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 10px 0px 0px 375px;
  cursor: pointer;
`;
