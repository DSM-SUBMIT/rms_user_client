import {
  CODE,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  TOKEN,
  TOKEN_FAILURE,
  TOKEN_SUCCESS,
} from './interface';
import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';

export const setCode = createAction(CODE)<string>();
export const getToken = createAction(TOKEN)();
export const getTokenSuccess = createAction(TOKEN_SUCCESS)();
export const getTokenFailure = createAction(TOKEN_FAILURE)<error>();
export const refreshToken = createAction(REFRESH_TOKEN)<{ callback: () => void }>();
export const refreshTokenFailure = createAction(REFRESH_TOKEN_SUCCESS)();
export const refreshTokenSuccess = createAction(REFRESH_TOKEN_FAILURE)<error>();

export type loginActionType =
  | ReturnType<typeof setCode>
  | ReturnType<typeof getToken>
  | ReturnType<typeof getTokenSuccess>
  | ReturnType<typeof getTokenFailure>
  | ReturnType<typeof refreshToken>
  | ReturnType<typeof refreshTokenSuccess>
  | ReturnType<typeof refreshTokenFailure>;
