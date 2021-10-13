import React, { FC, useEffect } from 'react';
import * as S from './style';
import { Close, Github } from '../../../assets';
import {
  TechStatck,
  Plan,
  Report,
  Api,
  Details,
  GitHub,
  MemberListType,
} from '../../../constance/viewProject';
import { GET_PROJECT_CONTENTS } from '../../../modules/redux/action/viewProject/interface';
import { useDispatch } from 'react-redux';

interface Props {
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  projectId: number;
  techStack: string;
  memberList: Array<MemberListType>;
  fieledList: Array<string>;
  docsUrl: string;
  githubUrl: string;
}

const PorjectView: FC<Props> = props => {
  const { setIsOpenModal, projectName, projectType, fieledList, projectId } = props;
  const dispatch = useDispatch();
  const closeBoxClickHandler = () => {
    if (setIsOpenModal !== undefined) setIsOpenModal(false);
  };

  useEffect(() => {
    dispatch({ type: GET_PROJECT_CONTENTS });
  }, [projectId]);

  return (
    <S.ModalWrapper>
      <S.ProjectViewBox>
        <S.CloseBox onClick={closeBoxClickHandler}>
          <img src={Close} alt={'close'} />
        </S.CloseBox>
        <S.ContentBox>
          <S.TopBox>
            <S.Classification>[{projectType}]</S.Classification>
            <S.ProjectName>{props.projectName}</S.ProjectName>
            <S.Field>{fieledList}</S.Field>
          </S.TopBox>
          <S.TeamBox>
            <S.TeamName>{props.teamName}</S.TeamName>
            <S.NumberBox>
              {props.memberList &&
                props.memberList.map(data => {
                  return (
                    <>
                      <S.NumberName>{data.name}</S.NumberName>
                      <S.Email>{data.email}</S.Email>
                      <S.Role>{data.role}</S.Role>
                    </>
                  );
                })}
            </S.NumberBox>
          </S.TeamBox>
          <S.TechStatckBox>
            <S.TechStatck>{TechStatck}</S.TechStatck>
            <S.Statck>Javascript</S.Statck>
            <S.Statck>Java</S.Statck>
          </S.TechStatckBox>
          <S.WriteBox>
            <S.WriteText>{Plan}</S.WriteText>
            <S.WriteBtn>작성하기</S.WriteBtn>
          </S.WriteBox>
          <S.WriteBox>
            <S.WriteText>{Report}</S.WriteText>
            <S.WriteBtn>작성하기</S.WriteBtn>
          </S.WriteBox>
          <S.GitBox>
            <img src={Github} />
            <S.GitText>{GitHub}</S.GitText>
            <S.GitInput placeholder='깃허브 주소를 입력하세요' />
            <S.GitAddressBox>{props.githubUrl}</S.GitAddressBox>
          </S.GitBox>
          <S.GuitarBox>
            <S.GuitarText>{Api}</S.GuitarText>
            <S.InputBox placeholder='주소를 입력하세요' />
            <S.GuitarText>{Details}</S.GuitarText>
            <S.InputBox placeholder='주소를 입력하세요' />
          </S.GuitarBox>
        </S.ContentBox>
      </S.ProjectViewBox>
    </S.ModalWrapper>
  );
};

export default PorjectView;
