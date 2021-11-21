import { error } from '../../../../models/error';
import { ContentRequest } from '../../../../constance/writePlan';
import { createAction } from 'typesafe-actions';
import {
  GET_SAVE_PLAN,
  GET_SAVE_PLAN_SUCCESS,
  GET_SAVE_PLAN_FAILURE,
  CONTENT,
  GOAL,
  INCLUDEOTHERS,
  INCLUDECODE,
  INCLUDEOUTCOME,
  INCLUDERESULTREPORT,
  PLANNEDENDDATE,
  PLANNEDSTARTDATE,
  PROJECTID,
  GET_SUBMIT_PLAN,
  GET_SUBMIT_PLAN_SUCCESS,
  GET_SUBMIT_PLAN_FAILURE
} from './interface';

export const setContent = createAction(CONTENT)<string>();
export const setGoal = createAction(GOAL)<string>();
export const setIncludeOthers = createAction(INCLUDEOTHERS)<string>();
export const setIncludeCode = createAction(INCLUDECODE)<boolean>();
export const setIncludeOutcome = createAction(INCLUDEOUTCOME)<boolean>();
export const setIncludeResultReport = createAction(INCLUDERESULTREPORT)<boolean>();
export const setPlannedEndDate = createAction(PLANNEDENDDATE)<string>();
export const setPlannedStartDate = createAction(PLANNEDSTARTDATE)<string>();
export const setProjectId = createAction(PROJECTID)<number>();

export const setSavePlan = createAction(GET_SAVE_PLAN)<ContentRequest>();
export const setSavePlanSuccess = createAction(GET_SAVE_PLAN_SUCCESS)();
export const setSavePlanFailure = createAction(GET_SAVE_PLAN_FAILURE)<error>();

export const setSubmitPlan = createAction(GET_SUBMIT_PLAN)();
export const setSubmitPlanSuccess = createAction(GET_SUBMIT_PLAN_SUCCESS)<ContentRequest>();
export const setSubmitPlanFailure = createAction(GET_SUBMIT_PLAN_FAILURE)<error>();

export type writePlanActionType =
  | ReturnType<typeof setContent>
  | ReturnType<typeof setGoal>
  | ReturnType<typeof setIncludeOthers>
  | ReturnType<typeof setIncludeCode>
  | ReturnType<typeof setIncludeOutcome>
  | ReturnType<typeof setIncludeResultReport>
  | ReturnType<typeof setPlannedEndDate>
  | ReturnType<typeof setPlannedStartDate>
  | ReturnType<typeof setSavePlan>
  | ReturnType<typeof setSavePlanSuccess>
  | ReturnType<typeof setSavePlanFailure>
  | ReturnType<typeof setProjectId>
  | ReturnType<typeof setSubmitPlan>
  | ReturnType<typeof setSubmitPlanSuccess>
  | ReturnType<typeof setSubmitPlanFailure>;
