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
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  MODIFY_PROJECT,
  MODIFY_PROJECT_SUCCESS,
  MODIFY_PROJECT_FAILURE,
  MODIFY_URL,
  MODIFY_URL_SUCCESS,
  MODIFY_URL_FAILURE,
  DOCSURL,
  GITHUB,
  SERVICEURL,
  ROLE,
} from './interface';
import {
  MemberListType,
  UsersListType,
  ProjectCreateType,
  UrlType,
} from '../../../../constance/project';

export const getProjectCreate = createAction(CREATE_PROJECT)<ProjectCreateType>();
export const getProjectCreateSuccess = createAction(CREATE_PROJECT_SUCCESS)();
export const getProjectCreateFailure = createAction(CREATE_PROJECT_FAILURE)<error>();
export const setProjectName = createAction(PROJECTNAME)<string>();
export const setProjectType = createAction(PROJECTTYPE)<string>();
export const setTeacher = createAction(TEACHER)<string>();
export const setTeamName = createAction(TEAMNAME)<string>();
export const setTechStacks = createAction(TECHSTACKS)<string>();
export const setFieldList = createAction(FIELDLIST)<string[]>();
export const setMemberList = createAction(MEMBERLIST)<MemberListType>();
export const getUserList = createAction(USERSLIST)();
export const getUserListSuccess = createAction(USERSLIST_SUCCESS)<UsersListType>();
export const getUserListFailure = createAction(USERSLIST_FAILURE)<error>();
export const setProjectDelete = createAction(DELETE_PROJECT)();
export const setProjectDeleteSuccess = createAction(DELETE_PROJECT_SUCCESS)();
export const setProjectDeleteFailure = createAction(DELETE_PROJECT_FAILURE)<error>();
export const getProjectModify = createAction(MODIFY_PROJECT)<ProjectCreateType>();
export const getProjectModifySuccess = createAction(MODIFY_PROJECT_SUCCESS)();
export const getProjectModifyFailure = createAction(MODIFY_PROJECT_FAILURE)<error>();
export const getUrlModify = createAction(MODIFY_URL)<UrlType>();
export const getUrlModifySuccess = createAction(MODIFY_URL_SUCCESS)();
export const getUrlModifyFailure = createAction(MODIFY_URL_FAILURE)<error>();
export const setDocsUrl = createAction(DOCSURL)<string>();
export const setGithubUrl = createAction(GITHUB)<string>();
export const setServiceUrl = createAction(SERVICEURL)<string>();
export const setRole = createAction(ROLE)<{ id: string; role: string }>();

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
  | ReturnType<typeof setProjectDeleteFailure>
  | ReturnType<typeof getProjectModify>
  | ReturnType<typeof getProjectModifySuccess>
  | ReturnType<typeof getProjectModifyFailure>
  | ReturnType<typeof getUrlModify>
  | ReturnType<typeof getUrlModifySuccess>
  | ReturnType<typeof getUrlModifyFailure>
  | ReturnType<typeof setDocsUrl>
  | ReturnType<typeof setGithubUrl>
  | ReturnType<typeof setServiceUrl>
  | ReturnType<typeof setRole>;
