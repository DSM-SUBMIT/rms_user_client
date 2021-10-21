import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';
import {
  PROJECTNAME,
  PROJECTTYPE,
  TEACHER,
  TEAMNAME,
  TECHSTACKS,
  FIELDLIST,
  MEMBERLIST,
  USERSLIST,
  USERSLIST_SUCCESS,
  USERSLIST_FAILURE,
} from './interface';
import { MemberListType, UsersListType } from '../../../../constance/project';

export const setProjectName = createAction(PROJECTNAME)<string>();
export const setProjectType = createAction(PROJECTTYPE)<string>();
export const setTeacher = createAction(TEACHER)<string>();
export const setTeamName = createAction(TEAMNAME)<string>();
export const setTechStacks = createAction(TECHSTACKS)<string>();
export const setFieldList = createAction(FIELDLIST)();
export const setMemberList = createAction(MEMBERLIST)<MemberListType>();
export const getUserList = createAction(USERSLIST)();
export const getUserListSuccess = createAction(USERSLIST_SUCCESS)<UsersListType>();
export const getUserListFailure = createAction(USERSLIST_FAILURE)<error>();

export type createProjectActionType =
  | ReturnType<typeof setProjectName>
  | ReturnType<typeof setProjectType>
  | ReturnType<typeof setTeacher>
  | ReturnType<typeof setTeamName>
  | ReturnType<typeof setTechStacks>
  | ReturnType<typeof setFieldList>
  | ReturnType<typeof setMemberList>
  | ReturnType<typeof getUserList>
  | ReturnType<typeof getUserListSuccess>
  | ReturnType<typeof getUserListFailure>;
