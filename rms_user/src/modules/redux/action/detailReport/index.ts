import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';
import { GET_REPORT, GET_REPORT_FAILURE, GET_REPORT_SUCCESS } from './interface';
import { detailReportResponseType } from '../../../../constance/detailReport';

export const getReport = createAction(GET_REPORT)();
export const getReportSuccess = createAction(GET_REPORT_SUCCESS)<detailReportResponseType>();
export const getReportFailure = createAction(GET_REPORT_FAILURE)<error>();

export type detailReportActionType =
  | ReturnType<typeof getReport>
  | ReturnType<typeof getReportSuccess>
  | ReturnType<typeof getReportFailure>;
