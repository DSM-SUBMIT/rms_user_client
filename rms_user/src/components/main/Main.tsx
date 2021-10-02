import React, { FC } from 'react';
import * as S from './style';
import Header from '../header';
import ChooseField from './ChooseField';
import Project from './Project';
import { CheckStateType, ProjectListType } from '../../constance/main';
import ReactPaginate from 'react-paginate';

interface Props {
  currentPage: number;
  projectList: Array<ProjectListType>;
  totalPages: number;
  field: CheckStateType;
  setField: (payload: CheckStateType) => void;
  setPage: (payload: number) => void;
}

const Main: FC<Props> = props => {
  const { currentPage, projectList, totalPages, field, setField, setPage } = props;

  const pageBtnClickHandler = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return (
    <S.Main>
      <Header />
      <div>
        <ChooseField field={field} setField={setField} />
        <div>
          {projectList.map(data => {
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
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={4}
            marginPagesDisplayed={0}
            breakLabel={''}
            previousLabel={'<'}
            nextLabel={'>'}
            onPageChange={pageBtnClickHandler}
            containerClassName={'pagination'}
            activeClassName={'currentPage'}
            previousClassName={'pageLabelBtn'}
            nextClassName={'pageLabelBtn'}
          />
        </div>
      </div>
    </S.Main>
  );
};

export default Main;
