import React from 'react';
import * as S from './style';
import Header from '../header';
import ReportFirstPage from './ReportFirstPage';

const DetailReport = () => {
  return (
    <S.DetailReport>
      <Header />
      <div>
        <ReportFirstPage />
      </div>
    </S.DetailReport>
  );
};

export default DetailReport;
