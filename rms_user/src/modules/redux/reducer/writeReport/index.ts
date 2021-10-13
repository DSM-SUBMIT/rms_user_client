import ReportContentState from './interface';
import { writeReportActionType } from '../../action/writeReport';
import {
    GET_SAVE_REPORT_SUCCESS,
    GET_SAVE_REPORT_FAILURE,
    CONTENT,
    VIDEOURL,
    PROJECTID,
    GET_SUBMIT_REPORT_SUCCESS,
    GET_SUBMIT_REPORT_FAILURE
} from '../../action/writeReport/interface';

const initState: ReportContentState = {
  content: "",
  videoUrl: "",
  projectId: 1,
  error: null,
  isSuccessSave: false,
  isSuccessSubmit: false
};

const writePlanReducer = (
  state: ReportContentState = initState,
  action: writeReportActionType,
): ReportContentState => {
    switch (action.type) {
        case CONTENT:
          return {
            ...state,
            content: action.payload
          };
        case VIDEOURL:
            return {
                ...state,
                videoUrl: action.payload
            }
        case PROJECTID:
          return {
            ...state,
            projectId: action.payload
        };
        case GET_SAVE_REPORT_SUCCESS:
          return {
            ...state,
            isSuccessSave: true,
          };
        case GET_SAVE_REPORT_FAILURE:
          return {
            ...state,
            error: action.payload,
            isSuccessSave: false,
        };
        case GET_SUBMIT_REPORT_SUCCESS:
          return {
              ...state,
              isSuccessSubmit: true,
          };
        case GET_SUBMIT_REPORT_FAILURE:
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
