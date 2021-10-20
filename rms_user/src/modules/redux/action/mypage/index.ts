import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import { MypageResponseType } from '../../../../constance/mypage';
import {
  GET_MYPAGE_FEED,
  GET_MYPAGE_FEED_SUCCESS,
  GET_MYPAGE_FEED_FAILURE,
  CURRENTPROJECTID,
} from './interface';

export const getMypage = createAction(GET_MYPAGE_FEED)();
export const getMypageSuccess = createAction(GET_MYPAGE_FEED_SUCCESS)<MypageResponseType>();
export const getMypageFaillure = createAction(GET_MYPAGE_FEED_FAILURE)<error>();
export const setCurrentProjectId = createAction(CURRENTPROJECTID)<number>();

export type mypageActionType =
  | ReturnType<typeof getMypage>
  | ReturnType<typeof getMypageSuccess>
  | ReturnType<typeof getMypageFaillure>
  | ReturnType<typeof setCurrentProjectId>;
