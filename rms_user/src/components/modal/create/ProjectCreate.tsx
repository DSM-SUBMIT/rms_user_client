import React, { FC, useState } from 'react';
import * as S from './style';
import { Close, Github, X } from '../../../assets';
import {
  TechStatck,
  Plan,
  Report,
  Api,
  Details,
  GitHub,
  ClassificationSelect,
  TeacherSelect,
  MemberListType,
} from '../../../constance/project';
import ChooseField from '../../main/ChooseField';
import useProject from '../../../util/hooks/project';
import { useDispatch } from 'react-redux';
import { CREATE_PROJECT } from '../../../modules/redux/action/porject/interface';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
  projectName: string;
  projectType: string;
  teacher: string;
  teamName: string;
  techStacks: string;
  memberList: Array<MemberListType>;
  setProjectName: (payload: string) => void;
  setProjectType: (payload: string) => void;
  setTeacher: (payload: string) => void;
  setTeamName: (payload: string) => void;
  setTechStacks: (payload: string) => void;
  setMemberList: (payload: MemberListType) => void;
}

const ProjectCreate: FC<Props> = props => {
  const dispath = useDispatch();
  const { setModalOff, setModalOn } = props;
  const [tag, setTag] = useState([]);
  const { state, setState } = useProject();

  const handleClassificationSelect = (e: any) => {
    if (e.target.value === '분류 선택') {
      return;
    }
    setState.setProjectType(e.target.value);
  };

  const handleTeacherSelect = (e: any) => {
    if (e.target.value === '담당 선생님 선택') {
      return;
    }
    setState.setTeacher(e.target.value);
  };

  const onClickCreateProjectClose = () => {
    setModalOff('');
  };
  const onClickProjectTeamOpen = () => {
    setModalOn('projectTeam');
  };

  const onClickChose = () => {};

  const onLanguageClick = (e: any) => {
    if (e.key === 'Enter') {
      setState.setTechStacks(e.target.value);
      const newTags = e.target.value;
      console.log(newTags);
    }
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
              <S.ProjectNameBox
                placeholder='프로젝트 명을 입력하세요'
                onChange={e => setState.setProjectName(e.target.value)}
              />
              <S.UploadBut
                onClick={() => {
                  dispath({ type: CREATE_PROJECT });
                }}
              >
                업로드
              </S.UploadBut>
            </S.TopBox>
            <S.FieldChoiceBox>
              <S.FieldChoice>
                <option value=''>분야 선택</option>
                <option value=''>{ChooseField}</option>
              </S.FieldChoice>
            </S.FieldChoiceBox>
            <S.SelectBox>
              <S.ClassificationSelect onClick={handleClassificationSelect}>
                <option hidden>분류 선택</option>
                {ClassificationSelect.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </S.ClassificationSelect>
              <S.TeacherSelect onClick={handleTeacherSelect}>
                <option hidden>담당 선생님 선택</option>
                {TeacherSelect.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </S.TeacherSelect>
            </S.SelectBox>
            <S.InputBox>
              <S.TechStackBox>
                <S.TechStackInput
                  placeholder='기술 스택을 입력하세요'
                  type='text'
                  onKeyPress={e => onLanguageClick(e)}
                />
                <S.TagBox>
                  {tag.map((tag, i) => {
                    return <S.Tag key={i}>{tag}</S.Tag>;
                  })}
                  <S.Tag>뿡</S.Tag>
                </S.TagBox>
              </S.TechStackBox>
              <S.TeamBox>
                <S.TeamInput
                  placeholder='팀명을 입력하세요'
                  onChange={e => setState.setTeamName(e.target.value)}
                />
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
