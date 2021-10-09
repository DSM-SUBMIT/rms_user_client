import { GET_NAME, GET_NAME_SUCCESS, GET_NAME_FAILURE } from './interface';
import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';

export const getName = createAction(GET_NAME)();
export const getNameSuccess = createAction(GET_NAME_SUCCESS)<{ name: string }>();
export const getNameFailure = createAction(GET_NAME_FAILURE)<error>();

export type headerActionType =
  | ReturnType<typeof getName>
  | ReturnType<typeof getNameSuccess>
  | ReturnType<typeof getNameFailure>;
