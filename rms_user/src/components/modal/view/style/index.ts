import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
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
  height: 92px;
  align-items: center;
  text-align: center;
`;

export const Classification = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #4f4f4f;
`;

export const ProjectName = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
`;

export const Field = styled.div`
  width: 44px;
  height: 25px;
  background: #fdfdfd;
  border: 1px solid #386bee;
  box-sizing: border-box;
  border-radius: 15px;
  margin: 20px 10px 10px 0px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 12px;
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
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
`;

export const TeamName = styled.div`
  width: 50px;
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
`;

export const Email = styled.div`
  width: 150px;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  text-align: center;
  color: #ffffff;
  display: inline-block;
`;

export const Role = styled.div`
  display: inline-block;
  width: 36px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #5f5f5f;
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
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #000000;
`;

export const Statck = styled.div`
  width: 70px;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
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
  font-style: normal;
  font-weight: normal;
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
  font-style: normal;
  font-weight: normal;
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
  font-style: normal;
  font-weight: normal;
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
  font-style: normal;
  font-weight: normal;
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
  font-style: normal;
  font-weight: normal;
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

export const GuitarText = styled.p`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
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
    margin-left: 20px;
  }
`;
