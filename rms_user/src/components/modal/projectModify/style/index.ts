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

export const ProjectCreateBox = styled.div`
  position: relative;
  width: 665px;
  height: 657px;
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
  margin: 17px 15px;
  img {
    float: right;
    cursor: pointer;
  }
`;

export const ContentBox = styled.div`
  width: 557px;
  height: 558px;
  top: 17px;
  margin: auto;
`;

export const TopBox = styled.div`
  width: 557px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectNameBox = styled.input`
  width: 258px;
  height: 40px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 12px;
  padding: 10px 15px;
  ::placeholder {
    color: #aaaaaa;
  }
`;

export const BtnBox = styled.div``;

export const Btn = styled.button`
  width: 60px;
  height: 24px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #5f5f5f;
  margin-left: 8px;
  cursor: pointer;
`;

export const FieldChoiceBox = styled.div`
  width: 556px;
  height: 25px;
  margin: 20px 0px;
`;

export const FieldChoice = styled.div`
  position: absolute;
  width: 128px;
  height: 35px;
  background: #fefefe;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #4f4f4f;
  padding: 8px 18px;
  cursor: pointer;
  img {
    margin-left: 26px;
  }
`;

export const FieldBox = styled.div`
  height: 28px;
  display: flex;
  margin: 20px 0px;
`;

export const Field = styled.div`
  width: fit-content;
  height: 25px;
  background: #fdfdfd;
  border: 1px solid #386bee;
  box-sizing: border-box;
  border-radius: 15px;
  margin-right: 8px;
  font-size: 12px;
  color: #386bee;
  padding-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0px 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SelectBox = styled.div`
  width: 277px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

export const ClassificationSelect = styled.select`
  width: 68%;
  height: 35px;
  background: #fefefe;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  line-height: 17px;
  color: #4f4f4f;
  margin-right: 15px;
`;

export const TeacherSelect = styled.select`
  width: 134px;
  height: 35px;
  background: #fefefe;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  line-height: 17px;
  color: #4f4f4f;
`;

export const InputBox = styled.div`
  width: 556px;
  height: 342px;
  margin: 20px 0px;
`;

export const TechStackBox = styled.div`
  width: 555px;
  height: 136px;
  left: 441px;
  top: 374px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const TechStackInput = styled.input`
  width: 200px;
  height: 26px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  margin: 15px 0px 10px 15px;
  padding: 10px 15px;
  color: #000000;
  ::placeholder {
    color: #aaaaaa;
  }
`;

export const TagBox = styled.div`
  width: 526px;
  height: 60px;
  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(8, 0.1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 2px;
  row-gap: 5px;
`;

export const Tag = styled.div`
  padding: 0px 10px;
  width: fit-content;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  img {
    margin-left: 10px;
  }
`;

export const TeamBox = styled.div`
  width: 555px;
  height: 186px;
  left: 441px;
  top: 530px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 20px;
`;

export const TeamInput = styled.input`
  width: 200px;
  height: 26px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  color: #000000;
  margin: 15px 15px 10px 15px;
  padding: 10px 15px;
  ::placeholder {
    color: #aaaaaa;
  }
`;

export const Teammemberbtn = styled.button`
  width: 100px;
  height: 26px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  color: #386bee;
`;

export const MemberBox = styled.div`
  width: 525px;
  height: 120px;
  margin: auto;
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

export const Member = styled.div`
  margin-bottom: 9px;
  div {
    margin-right: 5px;
  }
`;

export const MemberName = styled.div`
  width: fit-content;
  padding: 3px 5px;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: inline-block;
`;

export const MemberEmail = styled.div`
  width: fit-content;
  height: 20px;
  padding: 5px 10px;
  background: #386bee;
  border-radius: 5px;
  font-size: 10px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  display: inline-block;
`;

export const MemberRole = styled.input`
  width: 280px;
  height: 20px;
  padding: 1px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  color: #5f5f5f;
  display: inline-block;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 10px;
  padding-left: 10px;
  color: #000000;
  placeholder {
    color: #aaaaaa;
  }
`;
