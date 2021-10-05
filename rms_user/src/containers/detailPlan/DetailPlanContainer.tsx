import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailPlan from '../../components/detailPlan/DetailPlan';
import { GET_DETAIL_PLAN } from '../../modules/redux/action/detailPlan/interface';
import UseDetailPlan from '../../util/hooks/detailPlan';

type DetailPlanParams = {
  id: string;
};

const DetailPlanContainer: FC = () => {
  const { state, setState } = UseDetailPlan();
  const { id } = useParams<DetailPlanParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    setState.setId(id);
  }, [id]);

  useEffect(() => {
    dispatch({type: GET_DETAIL_PLAN});
  }, [state.id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailPlan {...state}/>
    </Suspense>
  );
};

export default DetailPlanContainer;