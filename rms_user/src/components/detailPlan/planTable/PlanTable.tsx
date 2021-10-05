import React, { FC } from 'react';
import { MemberType } from '../../../constance/detailPlan';
import ProjectMember from '../projectMember/ProjectMember';
import DetailPlanState from '../../../modules/redux/reducer/detailPlan/interface';
import * as S from '../style';

const PlanTable: FC<DetailPlanState> = props => {
  const {
    content,
    goal,
    includeCode,
    includeOthers,
    includeResultReport,
    includeOutcome,
    members,
    plannedEndData,
    plannedStartData,
    projectName,
    writer,
  } = props;

  return (
    <>
      <S.ViewPlanTable>
        <S.PlanTitle>{projectName}</S.PlanTitle>
        <S.PlanContents>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>프로젝트명</S.ProjectInfoFont>
            <S.ThisProjectInfoFont>{projectName}</S.ThisProjectInfoFont>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>예정기간</S.ProjectInfoFont>
            <S.ThisProjectInfoFont>
              {plannedStartData} ~ {plannedEndData}
            </S.ThisProjectInfoFont>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectMember>
              프로젝트
              <br />
              팀원 및 역할
            </S.ProjectMember>
            <S.ThisProjectMemberList>
              {members.map((v: MemberType, i: number) => {
                return <ProjectMember {...v} key={i} />;
              })}
            </S.ThisProjectMemberList>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>신청자</S.ProjectInfoFont>
            <S.ApplicantInfo>{writer}</S.ApplicantInfo>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>프로젝트 목표</S.ProjectInfoFont>
            <S.ProjectContents>{goal}</S.ProjectContents>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>프로젝트 내용</S.ProjectInfoFont>
            <S.ProjectContents>{content}</S.ProjectContents>
          </S.ProjectContentWrapper>
          <S.ProjectResultWrapper>
            <S.ProjectResult>
              결과물
              <br />
              (해당 사항 체크)
            </S.ProjectResult>
            <S.ThisProjectResult>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='결과 보고서'
                  checked={includeResultReport}
                  readOnly={true}
                />
                결과 보고서
              </label>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='프로그램 코드'
                  checked={includeCode}
                  readOnly={true}
                />
                프로그램 코드
              </label>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='실행물(영상 또는 사진)'
                  checked={includeOutcome}
                  readOnly={true}
                />
                실행물(영상 또는 사진)
              </label>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='기타'
                  checked={includeOthers !== null && includeOthers !== ''}
                  readOnly={true}
                />
                기타( {includeOthers} )
              </label>
            </S.ThisProjectResult>
          </S.ProjectResultWrapper>
          <S.TeacherConfirmationWrapper>
            <S.TeacherConfirmation>담당교사 확인</S.TeacherConfirmation>
            <S.ThisTeacherConfirmation>
              <span>2021년 9월 26일</span>
              <span>직위: 선생님</span>
              <span>이름: 김지민(인)</span>
            </S.ThisTeacherConfirmation>
          </S.TeacherConfirmationWrapper>
        </S.PlanContents>
      </S.ViewPlanTable>
    </>
  );
};

export default PlanTable;
