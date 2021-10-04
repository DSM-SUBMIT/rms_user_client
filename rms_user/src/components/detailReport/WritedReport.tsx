import React, { FC, useMemo } from 'react';
import { SUBTITLE } from '../../constance/detailReport';
import * as S from './style';

interface Props {
  isSecondPage?: boolean;
}

const WritedReport: FC<Props> = ({ isSecondPage }) => {
  const subTitle = useMemo(() => {
    if (isSecondPage)
      return (
        <S.ReportContentTitle>
          <span>※</span>
          {SUBTITLE}
        </S.ReportContentTitle>
      );
  }, [isSecondPage]);

  return (
    <S.ReportPage>
      {subTitle}
      <S.ReportContentBox isSecondPage={isSecondPage}></S.ReportContentBox>
    </S.ReportPage>
  );
};

export default WritedReport;
