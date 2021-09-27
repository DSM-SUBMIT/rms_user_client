import { error } from '../../../../models/error';
import { CheckStateType, MainResponseType } from '../../../../constance/main';
import { createAction } from 'typesafe-actions';
import { GET_MAIN_FEED, GET_MAIN_FEED_FAILURE, GET_MAIN_FEED_SUCCESS, FIELD } from './interface';

export const getMainFeed = createAction(GET_MAIN_FEED)();
export const getMainFeedSuccess = createAction(GET_MAIN_FEED_SUCCESS)<MainResponseType>();
export const getMainFeedFailure = createAction(GET_MAIN_FEED_FAILURE)<error>();
export const setField = createAction(FIELD)<CheckStateType>();

export type gradeActionType =
  | ReturnType<typeof getMainFeed>
  | ReturnType<typeof getMainFeedSuccess>
  | ReturnType<typeof getMainFeedFailure>;
