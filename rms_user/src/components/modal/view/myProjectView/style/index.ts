import styled from 'styled-components';

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
  font-family: Noto Sans KR;
  font-size: 12px;
  color: #4f4f4f;
  align-items: center;
  text-align: center;
`;

export const ProjectName = styled.span`
  font-family: Noto Sans KR;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  align-items: center;
  text-align: center;
`;

export const ModifyBtn = styled.div`
  width: 60px;
  height: 24px;
  left: 58%;
  top: 15.8%;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  color: #5f5f5f;

  cursor: pointer;
  position: fixed;
`;

export const Box = styled.div`
  display: flex;
`;

export const Field = styled.div`
  padding: 0px 10px;
  width: fit-content;
  height: 25px;
  background: #fdfdfd;
  border: 1px solid #386bee;
  box-sizing: border-box;
  border-radius: 15px;
  font-family: Noto Sans KR;
  font-size: 12px;
  color: #386bee;
  box-sizing: border-box;
  margin-right: 10px;
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
  font-family: Noto Sans KR;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
`;

export const TeamName = styled.div`
  padding: 1.2px 10px;
  width: fit-content;
  height: 20px;
  background: #ffffff;
  border: 1px solid #386bee;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  text-align: center;
  color: #000000;
`;

export const NumberBox = styled.div`
  margin-top: 9px;
  div {
    margin-right: 5px;
  }
`;

export const NumberName = styled.div`
  width: 60px;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  display: inline-block;
  padding-top: 2px;
`;

export const Email = styled.div`
  width: 33%;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  display: inline-block;
  padding-top: 2px;
`;

export const Role = styled.div`
  width: 12%;
  height: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  text-align: center;
  color: #5f5f5f;
  display: inline-block;
  padding-top: 2px;
`;

export const TechStatckBox = styled.div`
  width: 556px;
  height: 51px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 6px 15px;
`;

export const TechStatck = styled.p`
  font-family: Noto Sans KR;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
`;

export const Statck = styled.div`
  padding: 0px 10px;
  width: fit-content;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  margin-top: 5px;
  display: inline-block;
  margin-left: 10px;
`;

export const WriteBox = styled.div`
  width: 556px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const WriteText = styled.span`
  font-family: Noto Sans KR;
  font-size: 14px;
  color: #000000;
`;

export const WriteBtn = styled.button`
  width: 60px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 10px;
  text-align: center;
  color: #5f5f5f;
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

export const GitText = styled.span`
  font-family: Noto Sans KR;
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
  font-family: Noto Sans KR;
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
  font-family: Noto Sans KR;
  font-size: 10px;
  color: #000000;
  margin-bottom: 5px;
  padding: 1px 15px;
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
  box-sizing: border-box;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-size: 11px;
  color: #5f5f5f;
  display: inline-block;
  padding: 1px 10px;
  margin-left: 11px;
  margin-bottom: 12px;
  :last-child {
    margin-left: 18px;
  }
`;

export const GuitarText = styled.p`
  font-family: Noto Sans KR;
  font-size: 11px;
  text-align: center;
  color: #5f5f5f;
  display: inline-block;
`;

export const InputBox = styled.input`
  width: 400px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 11px;
  font-size: 10px;
  padding: 5px 15px;
  color: #aaaaaa;
  margin-bottom: 10px;
  :last-child {
    margin-left: 18px;
  }
`;
