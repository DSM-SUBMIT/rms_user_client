import React, { FC, Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WriteReport } from '../../components';
import useWriteReport from '../../util/hooks/writeReport';

const WriteReportContainer: FC = () => {
  const { setState, state } = useWriteReport();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setState.setProjectId(id);
  }, [id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WriteReport />
    </Suspense>
  );
};

export default WriteReportContainer;
