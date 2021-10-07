import React, { FC, Suspense } from 'react';
import DetailPlan from '../../components/detailPlan/DetailPlan';

const DetailPlanContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPlan />
    </Suspense>
  );
};

export default DetailPlanContainer;