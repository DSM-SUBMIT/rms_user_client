import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Header from '../header';
import ChooseField from './ChooseField';
import Project from './Project';
import { CheckStateType, ProjectListType } from '../../constance/main';
import ReactPaginate from 'react-paginate';
import ProjectView from '../modal/view';

interface Props {
  currentPage: number;
  projectList: Array<ProjectListType>;
  totalPages: number;
  field: CheckStateType;
  setField: (payload: CheckStateType) => void;
  setPage: (payload: number) => void;
  setCurrentProjectId: (payload: number) => void;
}

const Main: FC<Props> = props => {
  const {
    currentPage,
    projectList,
    totalPages,
    field,
    setField,
    setPage,
    setCurrentProjectId,
  } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const pageBtnClickHandler = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const projectViewModal = useMemo(() => {
    if (isOpenModal) return <ProjectView setIsOpenModal={setIsOpenModal} />;
  }, [isOpenModal]);

  return (
    <>
      {projectViewModal}
      <S.Main>
        <Header />
        <div>
          <ChooseField field={field} setField={setField} />
          <div>
            {projectList &&
              projectList.map(data => {
                return (
                  <Project
                    id={data.id}
                    projectName={data.projectName}
                    projectType={data.projectType}
                    teamName={data.teamName}
                    fieldList={data.fieldList}
                    key={data.id}
                    setCurrentProjectId={setCurrentProjectId}
                    setIsOpenModal={setIsOpenModal}
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
    </>
  );
};

export default Main;
