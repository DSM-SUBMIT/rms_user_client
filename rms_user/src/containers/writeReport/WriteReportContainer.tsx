import React, { FC, Suspense, useEffect } from 'react';
import { WriteReport } from '../../components';
import { useDispatch } from 'react-redux';
import { GET_REPORT } from '../../modules/redux/action/detailReport/interface';
import UseDetailReport from '../../util/hooks/detailReport';
import useWriteReport from '../../util/hooks/writeReport';
import { useParams } from 'react-router-dom';

const WriteReportContainer: FC = () => {
  const { state, setState } = UseDetailReport();
  const { setProjectId } = useWriteReport().setState;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setProjectId(id);
    setState.setId(id);
  }, [id]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_REPORT });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WriteReport {...state} {...setState} />
    </Suspense>
  );
};

export default WriteReportContainer;
