import React, { FC } from 'react';
import DetailPlanState from '../../modules/redux/reducer/detailPlan/interface';
import * as S from './style';
import PlanTable from './planTable/PlanTable';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const DetailPlan: FC<DetailPlanState> = props => {
  const onClickPdfDownload = () => {
    const plan = document.getElementById('planTable')!;

    html2canvas(plan).then(canvas => {
      let imgWidth = 200;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const planImg = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(planImg, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${props.projectName}.pdf`);
    });
  };

  return (
    <>
      <S.ViewPlanWrapper id='planTable'>
        <PlanTable {...props} />
      </S.ViewPlanWrapper>
      <S.ButtonsWrapper>
        <S.Button onClick={onClickPdfDownload}>다운로드</S.Button>
      </S.ButtonsWrapper>
    </>
  );
};

export default DetailPlan;
