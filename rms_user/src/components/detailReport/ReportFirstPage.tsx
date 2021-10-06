import React, { FC } from 'react';
import * as S from './style';
import {
  REPORT_COVER,
  TEAM_PROJECT_REPORT,
  SUBMITTER,
  TEACHER,
  SCHOOL,
} from '../../constance/detailReport';

interface Props {
  projectName: string;
  writer: string;
}

const ReportFirstPage: FC<Props> = props => {
  const { projectName, writer } = props;
  return (
    <S.ReportPage>
      <S.ReportCover>{REPORT_COVER}</S.ReportCover>
      <S.ReportTitle>{TEAM_PROJECT_REPORT}</S.ReportTitle>
      <S.ReportTitleBox>
        <p>{projectName}</p>
      </S.ReportTitleBox>
      <S.Table>
        <tr>
          <td>{SUBMITTER}</td>
          <td>()학년 ()반 ()번 {writer}</td>
        </tr>
        <tr>
          <td>{TEACHER}</td>
          <td></td>
        </tr>
      </S.Table>
      <S.SchoolName>{SCHOOL}</S.SchoolName>
    </S.ReportPage>
  );
};

export default ReportFirstPage;
