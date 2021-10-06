import React, { FC } from 'react';
import DetailPlanState from '../../modules/redux/reducer/detailPlan/interface';
import * as S from './style';
import SoloPlanTable from './soloPlanTable/SoloPlanTable';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import TeamPlanTable from './teamPlanTable/TeamPlanTable';

const DetailPlan: FC<DetailPlanState> = props => {
  const onClickPdfDownload = () => {
    const plan = document.getElementById('planTable')!;

    html2canvas(plan).then(canvas => {
      let imgWidth = 200;
      let pageHeight = 295;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      const planImg = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm');
      let position = 0;

      pdf.addImage(planImg, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(planImg, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${props.projectName}.pdf`);
    });
  };

  return (
    <>
      <S.ViewPlanWrapper>
        {true ? <SoloPlanTable {...props} /> : <TeamPlanTable {...props} />}
        <S.ButtonsWrapper>
          <S.Button onClick={onClickPdfDownload}>다운로드</S.Button>
        </S.ButtonsWrapper>
      </S.ViewPlanWrapper>
    </>
  );
};

export default DetailPlan;
