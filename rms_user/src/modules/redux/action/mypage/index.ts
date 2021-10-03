import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import { CheckStateType } from '../../../../constance/mypage';
import {
  GET_MYPAGE_FEED,
  GET_MYPAGE_FEED_SUCCESS,
  GET_MYPAGE_FEED_FALURE,
  FIELD,
} from './interface';

export const getMypage = createAction(GET_MYPAGE_FEED)();
export const getMypageSuccess = createAction(GET_MYPAGE_FEED_SUCCESS)();
export const getMypageFaillure = createAction(GET_MYPAGE_FEED_FALURE)<error>();
export const setField = createAction(FIELD)<CheckStateType>();

export type mypageActionType =
  | ReturnType<typeof getMypage>
  | ReturnType<typeof getMypageSuccess>
  | ReturnType<typeof getMypageFaillure>
  | ReturnType<typeof setField>;
