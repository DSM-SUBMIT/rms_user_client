import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import { Close, Github } from '../../../../assets';
import {
  TechStatck,
  Plan,
  Report,
  Api,
  Details,
  GitHub,
  MemberListType,
} from '../../../../constance/viewProject';
import { GET_MY_PROJECT_CONTENTS } from '../../../../modules/redux/action/viewProject/interface';
import { useDispatch } from 'react-redux';
import { useModal } from '../../../../util/hooks/modal';

interface Props {
  setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  projectId: number;
  techStack: string;
  memberList: Array<MemberListType>;
  fieldList: Array<string>;
  docsUrl: string;
  githubUrl: string;
  isPlanAccepted: boolean;
  isPlanSubmitted: boolean;
  isReportAccepted: boolean;
  isReportSubmitted: boolean;
  writer: boolean;
}

const MyPorjectView: FC<Props> = props => {
  const dispatch = useDispatch();
  const { setState } = useModal();
  const [text] = useState('주소가 없습니다.');
  const closeBoxClickHandler = () => {
    if (props.setIsOpenModal !== undefined) props.setIsOpenModal(false);
  };

  const onClickModifyModal = () => {
    setState.setModalOn('modifyModal');
  };
  useEffect(() => {
    dispatch({ type: GET_MY_PROJECT_CONTENTS });
  }, [GET_MY_PROJECT_CONTENTS]);

  const techStacks = props.techStack.split(',');
  const gitHubs = (props.githubUrl || '').split(',');

  return (
    <S.ModalWrapper>
      <S.ProjectViewBox>
        <S.CloseBox onClick={closeBoxClickHandler}>
          <img src={Close} alt={'close'} />
        </S.CloseBox>
        <S.ContentBox>
          <S.TopBox>
            <S.Classification>[{props.projectType}]</S.Classification>
            <S.ProjectName>{props.projectName}</S.ProjectName>
            {props.writer ? <S.ModifyBtn onClick={onClickModifyModal}>수정하기</S.ModifyBtn> : null}
          </S.TopBox>
          <S.Box>
            {props.fieldList &&
              props.fieldList.map((state: string, i: number) => {
                return <S.Field key={i}>{state}</S.Field>;
              })}
          </S.Box>
          <S.TeamBox>
            <S.TeamName>{props.teamName}</S.TeamName>
            <S.MemberBox>
              {props.memberList &&
                props.memberList.map((data, index) => {
                  const roles = data.role.split(',');
                  return (
                    <S.NumberBox key={index}>
                      <S.NumberName>{data.name}</S.NumberName>
                      <S.Email>{data.email}</S.Email>
                      {roles.map((data, index) => {
                        if (data === ' ') {
                          return;
                        } else {
                          return <S.Role key={index}>{data}</S.Role>;
                        }
                      })}
                    </S.NumberBox>
                  );
                })}
            </S.MemberBox>
          </S.TeamBox>
          <S.TechStatckBox>
            <S.TechStatck>{TechStatck}</S.TechStatck>
            <S.StatckBox>
              {techStacks.map((data, index) => {
                return <S.Statck key={index}>{data}</S.Statck>;
              })}
            </S.StatckBox>
          </S.TechStatckBox>
          <S.WriteBox>
            <S.WriteText>{Plan}</S.WriteText>
            <div>
              {props.writer ? (
                (props.isPlanSubmitted === true &&
                props.isPlanAccepted === true ? null : props.isPlanSubmitted === false ? null : (
                  <S.Btn to='/write/plan'>수정하기</S.Btn>
                )) ||
                (props.isPlanSubmitted === true ? (
                  <S.Btn to={'detail-plan/' + `${props.projectId}`}>보러가기</S.Btn>
                ) : (
                  <S.Btn to='/write/plan'>작성하기</S.Btn>
                ))
              ) : (
                <S.Btn to={'detail-plan/' + `${props.projectId}`}>보러가기</S.Btn>
              )}
            </div>
          </S.WriteBox>
          <S.WriteBox>
            <S.WriteText>{Report}</S.WriteText>
            <div>
              {props.isReportSubmitted === true &&
              props.isReportAccepted === true ? null : props.isReportSubmitted === false ? null : (
                <S.Btn to='/write/report'>수정하기</S.Btn>
              )}
              {props.isPlanAccepted === true ? (
                props.isReportSubmitted === true ? (
                  <S.Btn to={'detail-report' + `${props.projectId}`}>보러가기</S.Btn>
                ) : (
                  <S.Btn to='/write/report'>작성하기</S.Btn>
                )
              ) : null}
            </div>
          </S.WriteBox>
          <S.GitBox>
            <img src={Github} />
            <S.GitText>{GitHub}</S.GitText>
            <S.UrlBox>
              {props.githubUrl === ''
                ? text
                : gitHubs &&
                  gitHubs.map((data, index) => {
                    return <S.GitAddressBox key={index}>{data}</S.GitAddressBox>;
                  })}
            </S.UrlBox>
          </S.GitBox>
          <S.GuitarBox>
            <div>
              <S.GuitarText>{Api}</S.GuitarText>
              <S.AddressBox>{props.serviceUrl == null ? text : props.serviceUrl}</S.AddressBox>
            </div>
            <div>
              <S.GuitarText>{Details}</S.GuitarText>
              <S.AddressBox>{props.docsUrl == null ? text : props.docsUrl}</S.AddressBox>
            </div>
          </S.GuitarBox>
        </S.ContentBox>
      </S.ProjectViewBox>
    </S.ModalWrapper>
  );
};

export default MyPorjectView;
