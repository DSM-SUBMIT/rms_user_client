import React from 'react';
import * as S from './style';
import Header from '../header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { DOWNLOAD } from '../../constance/detailReport';

const DetailReport = () => {
  return (
    <S.DetailReport>
      <Header />
      <div>
        <ReportFirstPage />
        <WritedReport isSecondPage />
        <WritedReport />
      </div>
      <S.DownloadBtn>
        <p>{DOWNLOAD}</p>
      </S.DownloadBtn>
    </S.DetailReport>
  );
};

export default DetailReport;
