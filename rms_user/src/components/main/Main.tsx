import React, { FC } from 'react';
import * as S from './style';
import Header from '../header';
import ChooseField from './ChooseField';
import Project from './Project';
import { CheckStateType, ProjectListType } from '../../constance/main';
import { error } from '../../models/error';

interface Props {
  currentPage: number;
  projectList: Array<ProjectListType>;
  totalPages: number;
  error: error | null;
  field: CheckStateType;
  setField: (payload: CheckStateType) => void;
  setPage: (payload: number) => void;
}

const Main: FC<Props> = props => {
  return (
    <S.Main>
      <Header />
      <div>
        <ChooseField />
        <div>
          {props.projectList.map(data => {
            return (
              <Project
                projectName={data.projectName}
                projectType={data.projectType}
                teamName={data.teamName}
                fieldList={data.fieldList}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    </S.Main>
  );
};

export default Main;
