import React, { FC } from 'react';
import DetailPlanState from '../../modules/redux/reducer/detailPlan/interface';
import * as S from './style';
import PlanTable from './planTable/PlanTable';

const DetailPlan: FC<DetailPlanState> = props => {
  return (
    <>
      <S.ViewPlanWrapper>
        <PlanTable {...props} />
        <S.ButtonsWrapper>
          <S.Button>다운로드</S.Button>
        </S.ButtonsWrapper>
      </S.ViewPlanWrapper>
    </>
  );
};

export default DetailPlan;
