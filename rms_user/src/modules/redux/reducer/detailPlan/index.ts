import { detailPlanActionType } from '../../action/detailPlan';
import {
  GET_DETAIL_PLAN_FAILURE,
  GET_DETAIL_PLAN_SUCCESS,
  ID,
} from '../../action/detailPlan/interface';
import DetailPlanState from './interface';

const initState: DetailPlanState = {
  content: '',
  goal: '',
  includeCode: false,
  includeOthers: '',
  includeOutcome: false,
  includeResultReport: false,
  members: [],
  plannedEndData: '',
  plannedStartData: '',
  projectName: '',
  writer: '',
  id: '',
  error: null,
};

const detailPlanReducer = (
  state: DetailPlanState = initState,
  action: detailPlanActionType,
): DetailPlanState => {
  switch (action.type) {
    case GET_DETAIL_PLAN_SUCCESS:
      return {
        ...state,
        content: action.payload.content,
        goal: action.payload.goal,
        includeCode: action.payload.includeCode,
        includeOthers: action.payload.includeOthers,
        includeOutcome: action.payload.includeOutcome,
        includeResultReport: action.payload.includeResultReport,
        members: action.payload.members,
        plannedEndData: action.payload.plannedEndDate,
        plannedStartData: action.payload.plannedStartDate,
        projectName: action.payload.projectName,
        writer: action.payload.writer,
      };
    case GET_DETAIL_PLAN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default detailPlanReducer;
