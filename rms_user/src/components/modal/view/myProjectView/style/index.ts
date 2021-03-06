import styled from 'styled-components';
import { color } from '../../../../../style';
import { Link } from 'react-router-dom';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

export const ProjectViewBox = styled.div`
  position: relative;
  width: 665px;
  height: 767px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CloseBox = styled.div`
  width: 635px;
  height: 16px;
  margin: 17px 15px 0 15px;
  img {
    float: right;
    cursor: pointer;
  }
`;

export const ContentBox = styled.div`
  width: 557px;
  height: 558px;
  margin: auto;
  margin-top: 3px;
`;

export const TopBox = styled.div`
  width: 556px;
  height: 62px;
  align-items: center;
  text-align: center;
`;

export const Classification = styled.p`
  font-size: 12px;
  color: #4f4f4f;
  align-items: center;
  text-align: center;
`;

export const ProjectName = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  align-items: center;
  text-align: center;
`;

export const ClickBtn = styled.div`
  width: 150px;
  left: 54%;
  display: flex;
  position: fixed;
  top: 15.5%;
`;

export const ModifyBtn = styled.div`
  width: 70px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  color: #5f5f5f;
  cursor: pointer;
  margin-right: 8px;
  padding-top: 3.5px;
`;

export const DeleteBtn = styled.div`
  width: 70px;
  height: 24px;
  left: 63%;
  top: 15.8%;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  color: #5f5f5f;
  cursor: pointer;
  padding-top: 3.5px;
`;

export const Box = styled.div`
  display: flex;
`;

export const Field = styled.div`
  padding: 3px 10px;
  width: fit-content;
  align-items: center;
  text-align: center;
  height: 25px;
  background: #fdfdfd;
  border: 1px solid #386bee;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 12px;
  margin-right: 10px;
  color: #386bee;
`;

export const TeamBox = styled.div`
  width: 556px;
  height: 170px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
  margin-right: 10px;
`;

export const TeamName = styled.div`
  padding: 1.2px 10px;
  width: fit-content;
  height: 20px;
  background: #ffffff;
  border: 1px solid #386bee;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`;

export const MemberBox = styled.div`
  width: auto;
  height: 130px;
  white-space: nowrap;
  margin-top: 4px;
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 6px;
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${color.main};
  }
  overflow-y: auto;
  overflow-x: auto;
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

export const NumberBox = styled.div`
  margin-bottom: 9px;
  div {
    margin-right: 5px;
  }
`;

export const NumberName = styled.div`
  width: fit-content;
  height: 20px;
  padding: 3px 8px;
  background: #386bee;
  border-radius: 5px;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: inline-block;
`;

export const Email = styled.div`
  width: fit-content;
  height: 20px;
  padding: 2px 8px;
  background: #386bee;
  border-radius: 5px;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: inline-block;
`;

export const Role = styled.div`
  width: fit-content;
  height: 20px;
  padding: 2px 8px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  color: #5f5f5f;
  display: inline-block;
`;

export const TechStatckBox = styled.div`
  width: 556px;
  height: 66px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 6px 15px;
`;

export const TechStatck = styled.p`
  font-size: 10px;
  line-height: 14px;
  color: #000000;
`;

export const StatckBox = styled.div`
  width: 520px;
  height: 30px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: 7px;
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 6px;
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${color.main};
  }
`;

export const Statck = styled.div`
  padding: 3px 10px;
  width: fit-content;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  align-items: center;
`;

export const WriteBox = styled.div`
  width: 556px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 8px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const WriteText = styled.span`
  font-size: 14px;
  color: #000000;
`;

export const Btn = styled(Link)`
  display: flex;
  width: 70px;
  text-decoration: none;
  cursor: pointer;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  color: #5f5f5f;
  margin-left: 9px;
  justify-content: center;
  align-items: center;
`;

export const GitBox = styled.div`
  width: 556px;
  height: 144px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 14px 15px;
  img {
    vertical-align: middle;
  }
`;

export const UrlBox = styled.div`
  width: auto;
  height: 96px;
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

export const GitText = styled.span`
  font-size: 12px;
  color: #000000;
`;

export const GitInput = styled.input`
  width: 500px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  color: #aaaaaa;
  margin: 10px 0px 9px 0px;
  padding: 4px 15px;
`;

export const GitAddressBox = styled.div`
  width: 500px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  color: #000000;
  margin-bottom: 5px;
  padding: 2px 15px;
  display: flex;
`;

export const GuitarBox = styled.div`
  width: 556px;
  height: 86px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 15px;
`;

export const AddressBox = styled.div`
  width: 403.01px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 11px;
  color: #5f5f5f;
  display: inline-block;
  margin-left: 11px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  :last-child {
    margin-left: 48px;
  }
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 6px;
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${color.main};
  }
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GuitarText = styled.span`
  font-size: 11px;
  text-align: center;
  color: #5f5f5f;
  display: inline-block;
  :last-child {
    margin-right: 7px;
  }
`;

export const InputBox = styled.input`
  width: 400px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 4px;
  font-size: 10px;
  padding: 5px 15px;
  color: #aaaaaa;
  margin-bottom: 10px;
  :last-child {
    margin-left: 12px;
  }
`;
