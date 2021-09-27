import React, { FC, Suspense } from 'react';
import DetailReport from '../../components/detailReport';

const DetailReportContainer: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailReport />
    </Suspense>
  );
};

export default DetailReportContainer;
