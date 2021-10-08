import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';
import { STDNUMBER, NUMBER, NUMBER_SUCCESS, NUMBER_FAILURE } from './interface';

export const setStdNumber = createAction(STDNUMBER)<number>();
export const number = createAction(NUMBER)<number>();
export const numberSuccess = createAction(NUMBER_SUCCESS)();
export const numberFailure = createAction(NUMBER_FAILURE)<error>();

export type infoActionType =
  | ReturnType<typeof setStdNumber>
  | ReturnType<typeof number>
  | ReturnType<typeof numberSuccess>
  | ReturnType<typeof numberFailure>;
