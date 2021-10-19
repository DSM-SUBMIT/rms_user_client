import { error } from '../../../../models/error';
import {
  GET_PROJECT_CONTENTS,
  GET_PROJECT_CONTENTS_SUCCESS,
  GET_PROJECT_CONTENTS_FAILURE,
  GET_MY_PROJECT_CONTENTS,
  GET_MY_PROJECT_CONTENTS_SUCCESS,
  GET_MY_PROJECT_CONTENTS_FAILURE,
  GET_PLAN_ACCEPTED_SUCCESS,
  GET_PLAN_ACCEPTED_FAILURE,
  GET_REPORT_ACCEPTED_SUCCESS,
  GET_REPORT_ACCEPTED_FAILURE,
  GET_PLAN_SUBMITTED_SUCCESS,
  GET_PLAN_SUBMITTED_FAILURE,
  GET_REPORT_SUBMITTED_SUCCESS,
  GET_REPORT_SUBMITTED_FAILURE,
} from './interface';
import { createAction } from 'typesafe-actions';
import { ViewMyProjectType, ViewProjectType } from '../../../../constance/viewProject';

export const getProjectView = createAction(GET_PROJECT_CONTENTS)();
export const getProjectViewSuccess = createAction(GET_PROJECT_CONTENTS_SUCCESS)<ViewProjectType>();
export const getProjectViewFailure = createAction(GET_PROJECT_CONTENTS_FAILURE)<error>();
export const getMyProjectView = createAction(GET_MY_PROJECT_CONTENTS)();
export const getMyProjectViewSuccess = createAction(
  GET_MY_PROJECT_CONTENTS_SUCCESS,
)<ViewMyProjectType>();
export const getMyProjectViewFailure = createAction(GET_MY_PROJECT_CONTENTS_FAILURE)<error>();
// export const getAcceptedPlanSuccess = createAction(GET_PLAN_ACCEPTED_SUCCESS);
// export const getAcceptedPlanFailure = createAction(GET_PLAN_ACCEPTED_FAILURE)<error>();
// export const getAcceptedReportSuccess = createAction(GET_REPORT_ACCEPTED_SUCCESS);
// export const getAcceptedReportFailure = createAction(GET_REPORT_ACCEPTED_FAILURE)<error>();
// export const getSubmittedPlanSuccess = createAction(GET_PLAN_SUBMITTED_SUCCESS);
// export const getSubmittedPlanFailure = createAction(GET_PLAN_SUBMITTED_FAILURE)<error>();
// export const getSubmittedReportSuccess = createAction(GET_REPORT_SUBMITTED_SUCCESS);
// export const getSubmittedReportFailure = createAction(GET_REPORT_SUBMITTED_FAILURE)<error>();

export type viewProjectActionType =
  | ReturnType<typeof getProjectView>
  | ReturnType<typeof getProjectViewSuccess>
  | ReturnType<typeof getProjectViewFailure>
  | ReturnType<typeof getMyProjectView>
  | ReturnType<typeof getMyProjectViewSuccess>;
// | ReturnType<typeof getMyProjectViewFailure>
// | ReturnType<typeof getAcceptedPlanSuccess>
// | ReturnType<typeof getAcceptedPlanFailure>
// | ReturnType<typeof getAcceptedReportSuccess>
// | ReturnType<typeof getAcceptedReportFailure>
// | ReturnType<typeof getSubmittedPlanSuccess>
// | ReturnType<typeof getSubmittedPlanFailure>
// | ReturnType<typeof getSubmittedReportSuccess>
// | ReturnType<typeof getSubmittedReportFailure>;
