import React, { FC } from "react";
import ProjectMember from "./projectMember/ProjectMember";
import * as S from "./style";

const DetailPlan: FC = () => {
  return (
    <>
      <S.ViewPlanWrapper>
        <S.ViewPlanTable>
          <S.PlanTitle>프로젝트명</S.PlanTitle>
          <S.PlanContents>
            <S.ProjectContentWrapper>
              <S.ProjectInfoFont>프로젝트명</S.ProjectInfoFont>
              <S.ThisProjectInfoFont>김지민 천재</S.ThisProjectInfoFont>
            </S.ProjectContentWrapper>
            <S.ProjectContentWrapper>
              <S.ProjectInfoFont>예정기간</S.ProjectInfoFont>
              <S.ThisProjectInfoFont>
                2021년 9월 23일부터 2021년 10월 23일까지
              </S.ThisProjectInfoFont>
            </S.ProjectContentWrapper>
            <S.ProjectContentWrapper>
              <S.ProjectMember>
                프로젝트
                <br />
                팀원 및 역할
              </S.ProjectMember>
              <S.ThisProjectMemberList>
                {Array(3)
                  .fill(0)
                  .map((v, i) => {
                    return <ProjectMember key={i} />;
                  })}
              </S.ThisProjectMemberList>
            </S.ProjectContentWrapper>
            <S.ProjectContentWrapper>
              <S.ProjectInfoFont>신청자</S.ProjectInfoFont>
              <S.ApplicantInfo>학번</S.ApplicantInfo>
              <S.ApplicantInfo>2206</S.ApplicantInfo>
              <S.ApplicantInfo>이름</S.ApplicantInfo>
              <S.ApplicantInfo>김지민</S.ApplicantInfo>
            </S.ProjectContentWrapper>
            <S.ProjectContentWrapper>
              <S.ProjectInfoFont>프로젝트 목표</S.ProjectInfoFont>
              <S.ProjectContents>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                nulla eu nulla molestie sollicitudin. Vivamus rutrum nulla
                neque, nec aliquam odio efficitur rutrum. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Nam nulla dui, pulvinar
                vel rhoncus ut, eleifend nec eros. Vivamus tempus lorem vitae
                sapien ullamcorper tristique. Aliquam magna lorem, vehicula quis
                viverra ut, lacinia sit amet magna. Etiam consequat mollis arcu
                at scelerisque. Vivamus ultricies vehicula pretium. Ut non nisl
                a mi mattis bibendum. Sed maximus non mi ut volutpat. Mauris
                tempor dapibus libero, quis feugiat magna vulput
              </S.ProjectContents>
            </S.ProjectContentWrapper>
            <S.ProjectContentWrapper>
              <S.ProjectInfoFont>프로젝트 내용</S.ProjectInfoFont>
              <S.ProjectContents>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie et sapien sed tempor. Aliquam a quam
                aliquet, gravida tortor ultricies, volutpat libero. Nullam
                semper risus in nulla feugiat suscipit. Curabitur fringilla nunc
                bibendum quam placerat, ac porta velit tristique. Sed non risus
                id dui scelerisque tincidunt sit amet eget mi. Fusce in eros
                luctus, consequat massa ac, blandit ipsum. Integer quis nunc et
                risus facilisis facilisis nec at mi. Nunc ac sollicitudin urna.
                Proin tincidunt vestibulum enim, in porttitor libero consectetur
                a. Pellentesque euismod nisl ac risus tempor dictum. Ut id lacus
                condimentum erat condimentum tristique non a augue. Suspendisse
                potenti. Quisque euismod augue id velit dictum, a pharetra augue
                lacinia. Nullam maximus a felis vel bibendum. Aliquam facilisis
                metus a hendrerit maximus. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Nulla
                convallis odio et luctus gravida. Praesent quis ante metus.
                Morbi sed nulla sit amet sapien facilisis semper id dapibus
                metus. Maecenas vel diam in diam commodo tincidunt quis ac
                massa. Pellentesque vulputate eu augue nec bibendum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse
                fermentum lorem in massa suscipit, et rhoncus quam varius.
                Vestibulum sed quam fermentum, auctor augue ut, cursus felis.
                Sed sagittis tempor arcu, id cursus orci gravida ac. Sed lacinia
                viverra sollicitudin.
              </S.ProjectContents>
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
                    type="checkbox"
                    name="결과 보고서"
                    value="결과 보고서"
                  />
                  결과 보고서
                </label>
                <label>
                  <S.ProjectResultCheckBox
                    type="checkbox"
                    name="프로그램 코드"
                    value="프로그램 코드"
                  />
                  프로그램 코드
                </label>
                <label>
                  <S.ProjectResultCheckBox
                    type="checkbox"
                    name="실행물(영상 또는 사진)"
                    value="실행물(영상 또는 사진)"
                  />
                  실행물(영상 또는 사진)
                </label>
                <label>
                  <S.ProjectResultCheckBox
                    type="checkbox"
                    name="기타"
                    value="기타"
                  />
                  기타( )
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
        <S.ButtonsWrapper>
          <S.Button>다운로드</S.Button>
        </S.ButtonsWrapper>
      </S.ViewPlanWrapper>
    </>
  );
};

export default DetailPlan;