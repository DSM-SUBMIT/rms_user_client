import React, { FC, useEffect } from 'react';
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
  field: Array<string>;
  writer: string;
  setId: (payload: string) => void;
}

const DetailReport: FC<Props> = props => {
  const { content, field, writer, setId } = props;
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

  useEffect(() => {
    setId(path);
  }, [path]);

  return (
    <S.DetailReport>
      <Header />
      <div id='pdf'>
        <ReportFirstPage field={field} writer={writer} />
        <WritedReport isSecondPage content={content} />
        <WritedReport content={content} />
      </div>
      <S.DownloadBtn onClick={downloadBtnClickHandler}>
        <p>{DOWNLOAD}</p>
      </S.DownloadBtn>
    </S.DetailReport>
  );
};

export default DetailReport;
