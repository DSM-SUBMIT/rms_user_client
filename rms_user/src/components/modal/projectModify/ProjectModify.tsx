import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { Close, X, Arrow, FieldClose } from '../../../assets';
import { TeacherSelect, MemberListType, ClassificationSelect } from '../../../constance/project';
import { useDispatch } from 'react-redux';
import { MODIFY_PROJECT } from '../../../modules/redux/action/porject/interface';
import FieldBox from '../field';
import { GET_MY_PROJECT_CONTENTS } from '../../../modules/redux/action/viewProject/interface';
import useViewMyProject from '../../../util/hooks/viewMyProject';
import DeleteBox from '../delete';
import ProjectTeam from '../team';
import useUserList from '../../../util/hooks/userList';
import useProject from '../../../util/hooks/project';
import { setMemberList } from '../../../modules/redux/action/porject';

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

const ProjectModfiy: FC<Props> = props => {
  const dispatch = useDispatch();
  const { state } = useViewMyProject();
  const {
    setModalOff,
    memberList,
    techStack,
    setTechStacks,
    setFieldList,
    fieldList,
    setProjectName,
    setProjectType,
    setTeacher,
    setTeamName,
    setRole,
  } = props;
  const userState = useUserList().state;
  const projectState = useViewMyProject().state;
  const setProjectState = useProject().setState;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenTeameModal, setIsOpenTeamModal] = useState<boolean>(false);
  useEffect(() => {
    setTechStacks(state.techStack);
    setFieldList(state.fieldList);
    setProjectName(state.projectName);
    setProjectType(state.projectType);
    setTeacher(state.teacher);
    setTeamName(state.teamName);
    //  setMemberList(state.memberList);
  }, [
    state.techStack,
    state.fieldList,
    state.projectName,
    state.projectType,
    state.teacher,
    state.teamName,
    state.memberList,
  ]);

  const handleClassificationSelect = (e: any) => {
    if (e.currentTarget.value === '?????? ??????') {
      return;
    }
    if (e.currentTarget.value === '????????? ????????????') {
      setProjectType('CLUB');
    } else if (e.currentTarget.value === '???????????? ?????? 1') {
      setProjectType('PRO1');
    } else if (e.currentTarget.value === '???????????? ?????? 2') {
      setProjectType('PRO2');
    } else if (e.currentTarget.value === '??????????????? ??????') {
      setProjectType('SOFE');
    } else if (e.currentTarget.value === '?????? ????????????') {
      setProjectType('PERS');
    } else if (e.currentTarget.value === '??? ????????????') {
      setProjectType('TEAM');
    }
  };

  const handleTeacherSelect = (e: any) => {
    if (e.target.value === '?????? ????????? ??????') {
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

  const fieldBoxModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onClickFieldX = (Field: string) => {
    setFieldList(fieldList.filter((item: string) => Field !== item));
  };

  const onClickDeleteModalOpen = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  useEffect(() => {
    dispatch({ type: GET_MY_PROJECT_CONTENTS });
  }, []);

  return (
    <>
      {isOpenModal && (
        <FieldBox
          setIsOpenModal={setIsOpenModal}
          setFieldList={setFieldList}
          fieldList={fieldList}
        />
      )}
      {isOpenDeleteModal && <DeleteBox setIsOpenDeleteModal={setIsOpenDeleteModal} error={null} />}
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
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProjectName(e.currentTarget.value)
                }
                defaultValue={state.projectName}
              />
              <S.BtnBox>
                <S.Btn onClick={onClickDeleteModalOpen}>????????????</S.Btn>
                <S.Btn
                  onClick={() => {
                    if (props.techStack === '') {
                      alert('?????? ????????? ???????????????');
                    } else if (props.projectName === '') {
                      alert('???????????? ????????? ???????????????');
                    } else if (props.teamName === '') {
                      alert('??? ????????? ???????????????');
                    } else dispatch({ type: MODIFY_PROJECT });
                  }}
                >
                  ??????
                </S.Btn>
              </S.BtnBox>
            </S.TopBox>
            <S.FieldChoiceBox>
              <S.FieldChoice onClick={fieldBoxModal}>
                ?????? ??????
                <img src={Arrow} alt='arrow' />
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
                        <img
                          src={FieldClose}
                          onClick={() => onClickFieldX(item)}
                          alt='field close'
                        />
                      </S.Field>
                    );
                  })}
              </>
            </S.FieldBox>
            <S.SelectBox>
              <S.ClassificationSelect onClick={handleClassificationSelect}>
                <option hidden>{state.projectType}</option>
                {ClassificationSelect.map((data, index) => (
                  <option key={index} data-id={data.id}>
                    {data.content}
                  </option>
                ))}
              </S.ClassificationSelect>
              <S.TeacherSelect onClick={handleTeacherSelect}>
                <option hidden>{state.teacher}</option>
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
                  placeholder='?????? ????????? ???????????????'
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
                          <img src={X} onClick={() => onClickX(tag)} alt='x' />
                        </S.Tag>
                      );
                    })}
                </S.TagBox>
              </S.TechStackBox>
              <S.TeamBox>
                <S.TeamInput
                  defaultValue={state.teamName}
                  onChange={e => setTeamName(e.target.value)}
                />
                <S.Teammemberbtn onClick={onClickProjectTeamOpen}>?????? ????????????</S.Teammemberbtn>
                <S.MemberBox>
                  {state.memberList.map((data, i: number) => {
                    return (
                      <S.Member>
                        <S.MemberName>{data.name}</S.MemberName>
                        <S.MemberEmail>{data.email}</S.MemberEmail>
                        <S.MemberRole defaultValue={data.role} />
                      </S.Member>
                    );
                  })}
                  {memberList.map((data, i: number) => {
                    return (
                      <S.Member>
                        <S.MemberName>{data.name}</S.MemberName>
                        <S.MemberEmail>{data.email}</S.MemberEmail>
                        <S.MemberRole
                          placeholder='????????? ????????? ?????????(,??? ???????????? ?????? ?????????)'
                          value={data.role}
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

export default ProjectModfiy;
