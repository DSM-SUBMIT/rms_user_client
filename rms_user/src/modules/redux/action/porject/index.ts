import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';
import {
  CREATE_PROJECT,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
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
  PROJECTDELETE,
  PROJECTDELETE_SUCCESS,
  PROJECTDELETE_FAILURE,
} from './interface';
import { MemberListType, UsersListType, ProjectCreateType } from '../../../../constance/project';

export const getProjectCreate = createAction(CREATE_PROJECT)<ProjectCreateType>();
export const getProjectCreateSuccess = createAction(CREATE_PROJECT_SUCCESS)();
export const getProjectCreateFailure = createAction(CREATE_PROJECT_FAILURE)<error>();
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
export const setProjectDelete = createAction(PROJECTDELETE)();
export const setProjectDeleteSuccess = createAction(PROJECTDELETE_SUCCESS)();
export const setProjectDeleteFailure = createAction(PROJECTDELETE_FAILURE)<error>();

export type createProjectActionType =
  | ReturnType<typeof getProjectCreate>
  | ReturnType<typeof getProjectCreateSuccess>
  | ReturnType<typeof getProjectCreateFailure>
  | ReturnType<typeof setProjectName>
  | ReturnType<typeof setProjectType>
  | ReturnType<typeof setTeacher>
  | ReturnType<typeof setTeamName>
  | ReturnType<typeof setTechStacks>
  | ReturnType<typeof setFieldList>
  | ReturnType<typeof setMemberList>
  | ReturnType<typeof getUserList>
  | ReturnType<typeof getUserListSuccess>
  | ReturnType<typeof getUserListFailure>
  | ReturnType<typeof setProjectDelete>
  | ReturnType<typeof setProjectDeleteSuccess>
  | ReturnType<typeof setProjectDeleteFailure>;
