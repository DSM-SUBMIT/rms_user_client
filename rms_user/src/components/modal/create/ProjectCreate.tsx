import React, { FC, useState } from 'react';
import * as S from './style';
import { Close, X, Arrow, FieldClose } from '../../../assets';
import { ClassificationSelect, TeacherSelect, MemberListType } from '../../../constance/project';
import { useDispatch } from 'react-redux';
import { CREATE_PROJECT } from '../../../modules/redux/action/porject/interface';
import FieldBox from '../field';
import ProjectTeam from '../team';
import useUserList from '../../../util/hooks/userList';
import useProject from '../../../util/hooks/project';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
  projectName: string;
  projectType: string;
  teacher: string;
  teamName: string;
  techStack: string;
  memberList: Array<MemberListType>;
  fieldList: string[];
  setProjectName: (payload: string) => void;
  setProjectType: (payload: string) => void;
  setTeacher: (payload: string) => void;
  setTeamName: (payload: string) => void;
  setTechStacks: (payload: string) => void;
  setMemberList: (payload: MemberListType) => void;
  setFieldList: (payload: string[]) => void;
  setRole: (payload: { id: string; role: string }) => void;
}

const ProjectCreate: FC<Props> = props => {
  const dispath = useDispatch();
  const {
    projectName,
    projectType,
    teacher,
    techStack,
    teamName,
    memberList,
    fieldList,
    setModalOff,
    setModalOn,
    setTechStacks,
    setMemberList,
    setFieldList,
    setRole,
    setProjectType,
    setTeacher,
    setTeamName,
    setProjectName,
  } = props;
  const userState = useUserList().state;
  const projectState = useProject().state;
  const setProjectState = useProject().setState;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenTeameModal, setIsOpenTeamModal] = useState<boolean>(false);

  const handleClassificationSelect = (e: any) => {
    if (e.currentTarget.value === '분류 선택') {
      return;
    }
    if (e.currentTarget.value === '동아리 프로젝트') {
      setProjectType('CLUB');
    } else if (e.currentTarget.value === '프로젝트 실무 1') {
      setProjectType('PRO1');
    } else if (e.currentTarget.value === '프로젝트 실무 2') {
      setProjectType('PRO2');
    } else if (e.currentTarget.value === '소프트웨어 공학') {
      setProjectType('SOFE');
    } else if (e.currentTarget.value === '개인 프로젝트') {
      setProjectType('PERS');
    } else if (e.currentTarget.value === '팀 프로젝트') {
      setProjectType('TEAM');
    }
  };

  const handleTeacherSelect = (e: any) => {
    if (e.target.value === '담당 선생님 선택') {
      return;
    }
    setTeacher(e.target.value);
  };

  const onClickCreateProjectClose = (e: React.MouseEvent) => {
    setModalOff('');
  };

  const onClickProjectTeamOpen = () => {
    setIsOpenTeamModal(!isOpenTeameModal);
  };

  const onLanguageClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTechStacks(techStack + (!!techStack ? ',' : '') + e.currentTarget.value + '');
      e.currentTarget.value = '';
    }
  };

  const onClickX = (stack: string) => {
    setTechStacks(techStack.replace(stack + (techStack.includes(',') ? ',' : ''), ''));
  };

  const onClickFieldX = (Field: string) => {
    if (fieldList.includes(Field)) {
      setFieldList(fieldList.filter((item: string) => Field !== item));
    }
  };

  const fieldBoxModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      {isOpenModal && (
        <FieldBox
          setIsOpenModal={setIsOpenModal}
          setFieldList={setFieldList}
          fieldList={fieldList}
        />
      )}
      {isOpenTeameModal && (
        <ProjectTeam
          user={userState.user}
          setMemberList={setProjectState.setMemberList}
          memberList={projectState.memberList}
          setIsOpenTeamModal={setIsOpenTeamModal}
        />
      )}
      <S.ModalWrapper>
        <S.ProjectCreateBox>
          <S.CloseBox>
            <img src={Close} alt='closeModal' onClick={onClickCreateProjectClose} />
          </S.CloseBox>
          <S.ContentBox>
            <S.TopBox>
              <S.ProjectNameBox
                placeholder='프로젝트 명을 입력하세요'
                onChange={e => setProjectName(e.target.value)}
              />
              <S.UploadBut
                onClick={() => {
                  if (
                    projectName === '' ||
                    projectType === '' ||
                    teacher === '' ||
                    teamName === '' ||
                    memberList === [] ||
                    fieldList === [] ||
                    techStack === ''
                  ) {
                    alert('내용을 다 채워주세요');
                  } else {
                    dispath({ type: CREATE_PROJECT });
                    // window.location.replace('/mypage');
                  }
                }}
              >
                업로드
              </S.UploadBut>
            </S.TopBox>
            <S.FieldChoiceBox>
              <S.FieldChoice onClick={fieldBoxModal}>
                분야 선택
                <img src={Arrow} />
              </S.FieldChoice>
            </S.FieldChoiceBox>
            <S.FieldBox>
              <>
                {fieldList
                  .filter(item => !!item)
                  .map((item, index) => {
                    return (
                      <S.Field key={index}>
                        {item}
                        <img src={FieldClose} onClick={() => onClickFieldX(item)} />
                      </S.Field>
                    );
                  })}
              </>
            </S.FieldBox>
            <S.SelectBox>
              <S.ClassificationSelect onClick={handleClassificationSelect}>
                <option hidden>분류 선택</option>
                {ClassificationSelect.map((data, index) => (
                  <option key={index} data-id={data.id}>
                    {data.content}
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
                  {techStack
                    .split(',')
                    .filter(item => !!item)
                    .map((tag, i) => {
                      return (
                        <S.Tag key={i}>
                          {tag.trim()}
                          <img src={X} onClick={() => onClickX(tag)} />
                        </S.Tag>
                      );
                    })}
                </S.TagBox>
              </S.TechStackBox>
              <S.TeamBox>
                <S.TeamInput
                  placeholder='팀명을 입력하세요'
                  onChange={e => setTeamName(e.target.value)}
                />
                <S.Teammemberbtn onClick={onClickProjectTeamOpen}>팀원 설정하기</S.Teammemberbtn>
                <S.MemberBox>
                  {memberList.map((data, i: number) => {
                    return (
                      <S.Member>
                        <S.MemberName>{data.name}</S.MemberName>
                        <S.MemberEmail>{data.email}</S.MemberEmail>
                        <S.MemberRole
                          placeholder='역할을 입력해 주세요(,를 이용하여 끊어 주세요)'
                          data-id={data.id}
                          onChange={e => {
                            const index = memberList.findIndex(member => member.id === data.id);
                            if (index === -1) return;
                            setRole({
                              id: String(i),
                              role: e.target.value,
                            });
                          }}
                        />
                      </S.Member>
                    );
                  })}
                </S.MemberBox>
              </S.TeamBox>
            </S.InputBox>
          </S.ContentBox>
        </S.ProjectCreateBox>
      </S.ModalWrapper>
    </>
  );
};

export default ProjectCreate;
