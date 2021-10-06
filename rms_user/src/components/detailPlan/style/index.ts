import styled from 'styled-components';
import { color } from '../../../style';

export const ViewPlanWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ViewPlanTable = styled.div`
  width: 800px;
  border: 1px solid;
  margin-top: 54px;
  background-color: white;
`;

export const PlanTitle = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
`;

export const PlanContents = styled.div`
  width: 100%;
`;

export const ProjectContentWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: row;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectInfoFont = styled.div`
  width: 150px;
  border-right: 1px solid;
  font-size: 21px;
`;

export const ThisProjectInfoFont = styled.div`
  width: 650px;
  height: 38px;
  font-size: 21px;
`;

export const ProjectMember = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid;
  font-size: 21px;
  text-align: center;
`;

export const ThisProjectMemberList = styled.div`
  width: 649px;
  display: flex;
  flex-direction: column;
`;

export const ThisProjectMemberWrapper = styled.div`
  width: 649px;
  height: 35px;
  display: flex;
  flex-direction: row;
  font-size: 21px;
  & + & {
    border-top: 1px solid;
  }
`;

export const ThisProjectMemberName = styled.div`
  width: 160px;
  height: 100%;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThisprojectMemberRole = styled.div`
  width: 488px;
  height: 100%;
  font-size: 21px;
  border-left: 1px dashed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectApplicant = styled.div`
  width: 150px;
  font-size: 21px;
  border-right: 1px solid;
  display: flex;
`;

export const ApplicantInfo = styled.div`
  width: 649px;
  height: 38px;
  font-size: 21px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    border-left: 1px solid;
  }
`;

export const ProjectContents = styled.div`
  width: 650px;
  padding: 5px 0px 5px 5px;
  font-size: 18px;
`;

export const ProjectResultWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: row;
`;

export const ProjectResult = styled.div`
  width: 150px;
  height: 75px;
  text-align: center;
  border-right: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThisProjectResult = styled.div`
  width: 649px;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
`;

export const ProjectResultCheckBox = styled.input`
  margin-right: 5px;
`;

export const TeacherConfirmationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TeacherConfirmation = styled.div`
  width: 150px;
  border-right: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThisTeacherConfirmation = styled.div`
  width: 649px;
  height: 85px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & span {
    font-size: 21px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: end;
  margin: 30px 0px 55px 0px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${color.main};
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  & + & {
    margin-left: 20px;
  }
`;
