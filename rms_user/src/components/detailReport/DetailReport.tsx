import React, { FC, useEffect } from 'react';
import * as S from './style';
import Header from '../header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { DOWNLOAD } from '../../constance/detailReport';
import { useLocation } from 'react-router-dom';

interface Props {
  content: string;
  field: Array<string>;
  writer: string;
  setId: (payload: string) => void;
}

const DetailReport: FC<Props> = props => {
  const { content, field, writer, setId } = props;
  const path = useLocation().pathname.slice(15);

  useEffect(() => {
    setId(path);
  }, [path]);

  return (
    <S.DetailReport>
      <Header />
      <div>
        <ReportFirstPage field={field} writer={writer} />
        <WritedReport isSecondPage content={content} />
        <WritedReport content={content} />
      </div>
      <S.DownloadBtn>
        <p>{DOWNLOAD}</p>
      </S.DownloadBtn>
    </S.DetailReport>
  );
};

export default DetailReport;
