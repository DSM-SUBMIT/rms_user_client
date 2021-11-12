import ContentState from './interface';
import { writePlanActionType } from '../../action/writePlan';
import {
  CONTENT,
  GOAL,
  INCLUDEOTHERS,
  INCLUDECODE,
  INCLUDEOUTCOME,
  INCLUDERESULTREPORT,
  PLANNEDENDDATE,
  PLANNEDSTARTDATE,
  PROJECTID,
  GET_SAVE_PLAN_SUCCESS,
  GET_SAVE_PLAN_FAILURE,
  GET_SUBMIT_PLAN_SUCCESS,
  GET_SUBMIT_PLAN_FAILURE
} from '../../action/writePlan/interface';

const initState: ContentState = {
  content: "",
  goal: "",
  includeCode: false,
  includeOthers: "",
  includeOutcome: false,
  includeResultReport: false,
  plannedEndDate : "",
  plannedStartDate: "",
  projectId: 1,
  error: null,
  isSuccessSave: false,
  isSuccessSubmit: false
};

const writePlanReducer = (
  state: ContentState = initState,
  action: writePlanActionType,
): ContentState => {
    switch (action.type) {
        case CONTENT:
          return {
            ...state,
            content: action.payload
          };
        case GOAL:
          return {
            ...state,
            goal: action.payload
          };
        case INCLUDECODE:
          return {
            ...state,
            includeCode: action.payload
          };
        case INCLUDEOTHERS:
          return {
            ...state,
            includeOthers: action.payload
          };
        case INCLUDEOUTCOME:
          return {
            ...state,
            includeOutcome: action.payload
          };
        case INCLUDERESULTREPORT:
          return {
            ...state,
            includeResultReport: action.payload
        };
        case PLANNEDENDDATE:
          return {
            ...state,
            plannedEndDate: action.payload
        };
        case PLANNEDSTARTDATE:
          return {
            ...state,
            plannedStartDate: action.payload
        };
        case PROJECTID:
          return {
            ...state,
            projectId: action.payload
        };
        case GET_SAVE_PLAN_SUCCESS:
          return {
            ...state,
            isSuccessSave: true,
          };
        case GET_SAVE_PLAN_FAILURE:
          return {
            ...state,
            error: action.payload,
            isSuccessSave: false,
        };
        case GET_SUBMIT_PLAN_SUCCESS:
          return {
              ...state,
              isSuccessSubmit: true,
          };
        case GET_SUBMIT_PLAN_FAILURE:
          return {
              ...state,
              error: action.payload,
              isSuccessSubmit: false,
          }
        default:
          return state;
      }
};

export default writePlanReducer;
