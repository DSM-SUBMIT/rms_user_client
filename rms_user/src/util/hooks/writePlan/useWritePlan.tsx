import { useDispatch } from 'react-redux';
import {
  getProjectId,
  setContent,
  setGoal,
  setIncludeCode,
  setIncludeOthers,
  setIncludeOutcome,
  setIncludeResultReport,
  setPlannedEndDate,
  setPlannedStartDate,
} from '../../../modules/redux/action/writePlan';
import { useSelectState } from '../default';

const useWritePlan = () => {
  const dispatch = useDispatch();
  const state = useSelectState().writePlan;
  const setState = {
    setContent: (payload: string) => {
      dispatch(setContent(payload));
    },
    setGoal: (payload: string) => {
      dispatch(setGoal(payload));
    },
    setIncludeCode: (payload: boolean) => {
      dispatch(setIncludeCode(payload));
    },
    setIncludeOthers: (payload: string) => {
      dispatch(setIncludeOthers(payload));
    },
    setIncludeOutcome: (payload: boolean) => {
      dispatch(setIncludeOutcome(payload));
    },
    setIncludeResultReport: (payload: boolean) => {
      dispatch(setIncludeResultReport(payload));
    },
    setPlannedEndDate: (payload: string) => {
      dispatch(setPlannedEndDate(payload));
    },
    setPlannedStartDate: (payload: string) => {
      dispatch(setPlannedStartDate(payload));
    },
    getProjectId: (payload: number) => {
      dispatch(getProjectId(payload));
    },
  };
  return { state, setState };
};

export default useWritePlan;