import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailReport from '../../components/detailReport';
import { GET_REPORT } from '../../modules/redux/action/detailReport/interface';
import UseDetailReoprt from '../../util/hooks/detailReport/UseDetailReport';

const DetailReportContainer: FC = () => {
  const { state, setState } = UseDetailReoprt();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_REPORT });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailReport {...state} {...setState} />
    </Suspense>
  );
};

export default DetailReportContainer;
