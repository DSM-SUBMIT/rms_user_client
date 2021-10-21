import React, { FC, useState } from 'react';
import * as S from './style';
import { Close, Github, X } from '../../../assets';
import { TechStatck, Plan, Report, Api, Details, GitHub } from '../../../constance/project';
import ChooseField from '../../main/ChooseField';
import ProjectTeam from '../team';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
}

const ProjectCreate: FC<Props> = props => {
  const { setModalOff, setModalOn } = props;
  const [tag, setTag] = useState([]);
  const onClickCreateProjectClose = () => {
    setModalOff('');
  };
  const onClickProjectTeamOpen = () => {
    setModalOn('projectTeam');
  };

  const onLanguageClick = (index: number) => {
    const delTags = [...tag];
    delTags.splice(index, 1);
    setTag(delTags);
  };
  return (
    <>
      <S.ModalWrapper>
        <S.ProjectCreateBox>
          <S.CloseBox>
            <img src={Close} alt='closeModal' onClick={onClickCreateProjectClose} />
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
                <option value='' disabled selected>
                  분류 선택
                </option>
                <option value=''>프로젝트 실무 1</option>
                <option value=''>프로젝트 실무 2</option>
                <option value=''>소프트웨어 공학</option>
                <option value=''>개인 프로젝트</option>
                <option value=''>팀 프로젝트</option>
                <option value=''>동아리 프로젝트</option>
              </S.ClassificationSelect>
              <S.TeacherSelect>
                <option value='' disabled selected>
                  담당 선생님 선택
                </option>
                <option value=''>1학년 담당 선생님</option>
                <option value=''>2학년 담당 선생님</option>
                <option value=''>3학년 담당 선생님</option>
                <option value=''>동아리 담당 선생님</option>
              </S.TeacherSelect>
            </S.SelectBox>
            <S.InputBox>
              <S.TechStackBox>
                <S.TechStackInput placeholder='기술 스택을 입력하세요' type='text' />
                <S.TagBox>
                  {tag.map((tag, i) => {
                    return (
                      <S.Tag onClick={() => onLanguageClick(i)} key={i}>
                        {tag}
                      </S.Tag>
                    );
                  })}
                </S.TagBox>
              </S.TechStackBox>
              <S.TeamBox>
                <S.TeamInput placeholder='팀명을 입력하세요' />
                <S.Teammemberbtn onClick={onClickProjectTeamOpen}>팀원 설정하기</S.Teammemberbtn>
              </S.TeamBox>
            </S.InputBox>
          </S.ContentBox>
        </S.ProjectCreateBox>
      </S.ModalWrapper>
    </>
  );
};

export default ProjectCreate;
