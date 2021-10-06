import React, { FC, useEffect, useMemo } from 'react';
import * as S from './style';
import Header from '../header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { DOWNLOAD } from '../../constance/detailReport';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface Props {
  content: string;
  isTeam: boolean;
  projectName: string;
  writer: string;
  setId: (payload: string) => void;
}

const DetailReport: FC<Props> = props => {
  const { content, projectName, writer, setId, isTeam } = props;
  const path = useLocation().pathname.slice(15);

  const downloadBtnClickHandler = () => {
    (document.getElementById('pdf') as HTMLElement).style.padding = '0px';
    html2canvas(document.getElementById('pdf') as HTMLElement).then(canvas => {
      let imgData = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      let imgWidth = 210;
      let pageHeight = imgWidth * 1.414;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 20) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('report.pdf');
    });
    (document.getElementById('pdf') as HTMLElement).style.paddingTop = '54px';
  };

  const makeContentArray = useMemo(() => {
    let contentArray: Array<string> = [];
    contentArray = content.split('!@#$%');
    return contentArray;
  }, [content]);

  useEffect(() => {
    setId(path);
  }, [path]);

  return (
    <S.DetailReport>
      <Header />
      <div id='pdf'>
        <ReportFirstPage projectName={projectName} writer={writer} isTeam={isTeam} />
        {makeContentArray.map((data: string, id: number) => {
          return <WritedReport isSecondPage={id === 0 ? true : false} content={data} />;
        })}
      </div>
      <S.DownloadBtn onClick={downloadBtnClickHandler}>
        <p>{DOWNLOAD}</p>
      </S.DownloadBtn>
    </S.DetailReport>
  );
};

export default DetailReport;
