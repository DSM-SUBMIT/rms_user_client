import React from 'react';
import * as S from './style';
import Header from '../header';
import ChooseField from './ChooseField';
import Project from './Project';

const Main = () => {
  return (
    <S.Main>
      <Header />
      <div>
        <ChooseField />
        <div>
          <Project
            title='보고서 관리 시스템'
            classification='팀프로젝트'
            writer='서브밋'
            field={['보안', '웹', '인공지능/빅데이터']}
          />
          <Project
            title='보고서 관리 시스템'
            classification='팀프로젝트'
            writer='서브밋'
            field={['보안', '웹', '인공지능/빅데이터']}
          />
          <Project
            title='보고서 관리 시스템'
            classification='팀프로젝트'
            writer='서브밋'
            field={['보안', '웹', '인공지능/빅데이터']}
          />
          <Project
            title='보고서 관리 시스템'
            classification='팀프로젝트'
            writer='서브밋'
            field={['보안', '웹', '인공지능/빅데이터']}
          />
          <Project
            title='보고서 관리 시스템'
            classification='팀프로젝트'
            writer='서브밋'
            field={['보안', '웹', '인공지능/빅데이터']}
          />
        </div>
      </div>
    </S.Main>
  );
};

export default Main;
