import { createAction } from 'typesafe-actions';
import { DetailPlanResponseType } from '../../../../constance/detailPlan';
import { error } from '../../../../models/error';
import { GET_DETAIL_PLAN, GET_DETAIL_PLAN_FAILURE, GET_DETAIL_PLAN_SUCCESS, ID } from './interface';

export const getDetailPlan = createAction(GET_DETAIL_PLAN)();
export const getDetailPlanSuccess = createAction(GET_DETAIL_PLAN_SUCCESS)<DetailPlanResponseType>();
export const getDetailPlanFailure = createAction(GET_DETAIL_PLAN_FAILURE)<error>();
export const setId = createAction(ID)<string>();

export type detailPlanActionType =
  | ReturnType<typeof getDetailPlan>
  | ReturnType<typeof getDetailPlanSuccess>
  | ReturnType<typeof getDetailPlanFailure>
  | ReturnType<typeof setId>;
