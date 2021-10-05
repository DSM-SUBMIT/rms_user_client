import React from 'react';
import * as S from './style';
import { Close, Github } from '../../../assets';
import { TechStatck, Plan, Report, Api, Details, GitHub } from '../../../constance/project';

const PorjectView = () => {
  return (
    <S.ModalWrapper>
      <S.ProjectViewBox>
        <S.CloseBox>
          <img src={Close} />
        </S.CloseBox>
        <S.ContentBox>
          <S.TopBox>
            <S.Classification>[프로젝트 실무 1]</S.Classification>
            <S.ProjectName>보고서 관리 시스템</S.ProjectName>
            <S.Field>웹</S.Field>
          </S.TopBox>
          <S.TeamBox>
            <S.TeamName>서브밋</S.TeamName>
            <S.NumberBox>
              <S.NumberName>이승윤</S.NumberName>
              <S.Email>yyuunn17@dsm.hs.kr</S.Email>
              <S.Role>PM</S.Role>
            </S.NumberBox>
            <S.NumberBox>
              <S.NumberName>이승윤</S.NumberName>
              <S.Email>yyuunn17@dsm.hs.kr</S.Email>
              <S.Role>PM</S.Role>
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
            <S.GitAddressBox>https://github.com/</S.GitAddressBox>
            <S.GitAddressBox>https://github.com/</S.GitAddressBox>
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
