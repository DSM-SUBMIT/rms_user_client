import React from 'react';
import * as S from './style';
import { Close } from '../../../assets';
import ChooseField from '../../main/ChooseField';

const ProjectCreate = () => {
  return (
    <>
      <S.ModalWrapper>
        <S.ProjectCreateBox>
          <S.CloseBox>
            <img src={Close} alt='closeModal' />
          </S.CloseBox>
          <S.ContentBox>
            <S.TopBox>
              <S.ProjectNameBox placeholder='프로젝트 명을 입력하세요' />
              <S.UploadBut>업로드</S.UploadBut>
            </S.TopBox>
            <S.FieldChoiceBox>
              <S.FieldChoice>
                <option value=''>분야 선택</option>
                <option value=''>{ChooseField}</option>
              </S.FieldChoice>
            </S.FieldChoiceBox>
            <S.SelectBox>
              <S.ClassificationSelect>
                <option value=''>분류 선택</option>
                <option value=''>프로젝트 실무 1</option>
                <option value=''>프로젝트 실무 2</option>
                <option value=''>소프트웨어 공학</option>
                <option value=''>개인 프로젝트</option>
                <option value=''>팀 프로젝트</option>
                <option value=''>동아리 프로젝트</option>
              </S.ClassificationSelect>
              <S.TeacherSelect>
                <option value=''>담당 선생님 선택</option>
                <option value=''>1학년 담당 선생님</option>
                <option value=''>2학년 담당 선생님</option>
                <option value=''>3학년 담당 선생님</option>
                <option value=''>동아리 담당 선생님</option>
              </S.TeacherSelect>
            </S.SelectBox>
            <S.InputBox>
              <S.TechStackBox>
                <S.TechStackInput placeholder='기술 스택을 입력하세요' />
              </S.TechStackBox>
              <S.TeamBox>
                <S.TeamInput placeholder='팀명을 입력하세요' />
                <S.Teammemberbtn>팀원 설정하기</S.Teammemberbtn>
              </S.TeamBox>
            </S.InputBox>
          </S.ContentBox>
        </S.ProjectCreateBox>
      </S.ModalWrapper>
    </>
  );
};

export default ProjectCreate;
