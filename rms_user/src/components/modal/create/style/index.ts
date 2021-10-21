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
  font-family: 'Noto Sans KR';
  padding: 10px 15px;
  font-family: Noto Sans KR;
  font-size: 12px;
  color: #aaaaaa;
`;

export const UploadBut = styled.button`
  width: 60px;
  height: 24px;
  margin-top: 7px;
  font-family: 'Noto Sans KR';
  font-weight: 200;
  font-size: 5px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  background: #fbfbfb;
  border: 1px solid #e5e5e5;
`;

export const FieldChoiceBox = styled.div`
  width: 556px;
  height: 80px;
  margin: 20px 0px;
`;

export const FieldChoice = styled.select`
  background: #fefefe;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  line-height: 17px;
  font-family: Noto Sans KR;
  color: #4f4f4f;
`;

export const SelectBox = styled.div`
  width: 277px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

export const ClassificationSelect = styled.select`
  width: 128px;
  height: 35px;
  background: #fefefe;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  line-height: 17px;
  font-family: Noto Sans KR;
  color: #4f4f4f;
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
  font-family: Noto Sans KR;
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
  font-family: Noto Sans KR;
  font-size: 10px;
  color: #aaaaaa;
  margin: 15px;
  padding: 10px 15px;
`;

export const TagBox = styled.div`
  width: 526px;
  height: 60px;
  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 2px;
  row-gap: 10px;
  padding-top: 4px;
`;

export const Tag = styled.div`
  padding: 0px 10px;
  width: fit-content;
  height: 20px;
  background: #386bee;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
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
  font-family: Noto Sans KR;
  font-size: 10px;
  color: #aaaaaa;
  margin: 15px;
  padding: 10px 15px;
`;

export const Teammemberbtn = styled.button`
  width: 100px;
  height: 26px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  color: #386bee;
`;
