import { error } from '../../../../models/error';
import { contentTypeRequest } from '../../../../constance/writePlan';
import { createAction } from 'typesafe-actions';
import {
    GET_WRITE_PLAN,
    GET_WRITE_PLAN_SUCCESS,
    GET_WRITE_PLAN_FAILURE
} from './interface';

export const getWritePlan = createAction(GET_WRITE_PLAN)<number>();
export const getWritePlanSuccess = createAction(GET_WRITE_PLAN_SUCCESS)<contentTypeRequest>();
export const getWritePlanFailure = createAction(GET_WRITE_PLAN_FAILURE)<error>();

export type viewProjectActionType =
  | ReturnType<typeof getWritePlan>
  | ReturnType<typeof getWritePlanSuccess>
  | ReturnType<typeof getWritePlanFailure>;