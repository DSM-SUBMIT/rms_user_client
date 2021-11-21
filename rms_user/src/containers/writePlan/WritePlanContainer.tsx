import React, { FC, Suspense, useEffect } from "react";
import { WritePlan } from "../../components";
import DetailPlan from "../../components/detailPlan/DetailPlan";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { GET_DETAIL_PLAN } from "../../modules/redux/action/detailPlan/interface";
import UseDetailPlan from "../../util/hooks/detailPlan";
import UseWritePlan from "../../util/hooks/writePlan";

type DetailPlanParams = {
  id: string;
}

const WritePlanContainer: FC = () => {
  const { state, setState } = UseDetailPlan();
  const { setState: setWriteState } = UseWritePlan();
  const { id } = useParams<DetailPlanParams>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.error?.status === 401) {
      alert('로그인 후 이용해주세요.');
      history.push('/');
    } else if (state.error?.status === 403) {
      alert('권한이 없습니다.');
      history.goBack();
    } else if (state.error?.status === 404) {
      alert('존재하지 않는 계획서 입니다.');
      history.goBack();
    }
  }, [state.error]);

  useEffect(() => {
    setState.setId(id);
    setWriteState.setProjectId(Number(id));
  }, [id]);

  useEffect(() => {
    dispatch({ type: GET_DETAIL_PLAN });
  }, [state.id]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WritePlan {...state}/>
    </Suspense>
  );
};

export default WritePlanContainer;