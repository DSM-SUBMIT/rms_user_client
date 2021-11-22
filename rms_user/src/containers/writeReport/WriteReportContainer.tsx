import React, { FC, Suspense, useEffect } from "react";
import { WriteReport } from "../../components";
import { useDispatch } from "react-redux";
import { GET_REPORT } from '../../modules/redux/action/detailReport/interface';
import UseDetailReport from "../../util/hooks/detailReport";

const WriteReportContainer: FC = () => {
  const { setState, state } = useWriteReport();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setState.setProjectId(id);
  }, [id]);

const WriteReportContainer: FC = () => {
  const { state, setState } = UseDetailReport();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_REPORT});
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WriteReport {...state} {...setState}/>
    </Suspense>
  );
};

export default WriteReportContainer;
