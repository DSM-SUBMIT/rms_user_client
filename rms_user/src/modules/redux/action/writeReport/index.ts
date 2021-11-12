import { error } from '../../../../models/error';
import { ReportContentRequest } from '../../../../constance/writeReport';
import { createAction } from 'typesafe-actions';
import {
  GET_SAVE_REPORT,
  GET_SAVE_REPORT_SUCCESS,
  GET_SAVE_REPORT_FAILURE,
  CONTENT,
  VIDEOURL,
  PROJECTID,
  GET_SUBMIT_REPORT,
  GET_SUBMIT_REPORT_SUCCESS,
  GET_SUBMIT_REPORT_FAILURE
} from './interface';

export const setContent = createAction(CONTENT)<string[]>();
export const setVideoUrl = createAction(VIDEOURL)<string>();
export const getProjectId = createAction(PROJECTID)<number>();

export const setSaveReport = createAction(GET_SAVE_REPORT)<ReportContentRequest>();
export const setSaveReportSuccess = createAction(GET_SAVE_REPORT_SUCCESS)();
export const setSaveReportFailure = createAction(GET_SAVE_REPORT_FAILURE)<error>();

export const setSubmitReport = createAction(GET_SUBMIT_REPORT)();
export const setSubmitReportSuccess = createAction(GET_SUBMIT_REPORT_SUCCESS)<ReportContentRequest>();
export const setSubmitReportFailure = createAction(GET_SUBMIT_REPORT_FAILURE)<error>();

export type writeReportActionType =
  | ReturnType<typeof setContent>
  | ReturnType<typeof getProjectId>
  | ReturnType<typeof setVideoUrl>
  | ReturnType<typeof setSaveReport>
  | ReturnType<typeof setSaveReportSuccess>
  | ReturnType<typeof setSaveReportFailure>
  | ReturnType<typeof setSubmitReport>
  | ReturnType<typeof setSubmitReportSuccess>
  | ReturnType<typeof setSubmitReportFailure>;
