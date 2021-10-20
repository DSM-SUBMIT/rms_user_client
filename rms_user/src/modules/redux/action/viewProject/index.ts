import { error } from '../../../../models/error';
import {
  GET_PROJECT_CONTENTS,
  GET_PROJECT_CONTENTS_SUCCESS,
  GET_PROJECT_CONTENTS_FAILURE,
  GET_MY_PROJECT_CONTENTS,
  GET_MY_PROJECT_CONTENTS_SUCCESS,
  GET_MY_PROJECT_CONTENTS_FAILURE,
} from './interface';
import { createAction } from 'typesafe-actions';
import { ViewMyProjectType, ViewProjectType } from '../../../../constance/viewProject';

export const getProjectView = createAction(GET_PROJECT_CONTENTS)();
export const getProjectViewSuccess = createAction(GET_PROJECT_CONTENTS_SUCCESS)<ViewProjectType>();
export const getProjectViewFailure = createAction(GET_PROJECT_CONTENTS_FAILURE)<error>();
export const getMyProjectView = createAction(GET_MY_PROJECT_CONTENTS)();
export const getMyProjectViewSuccess = createAction(
  GET_MY_PROJECT_CONTENTS_SUCCESS,
)<ViewMyProjectType>();
export const getMyProjectViewFailure = createAction(GET_MY_PROJECT_CONTENTS_FAILURE)<error>();

export type viewProjectActionType =
  | ReturnType<typeof getProjectView>
  | ReturnType<typeof getProjectViewSuccess>
  | ReturnType<typeof getProjectViewFailure>
  | ReturnType<typeof getMyProjectView>
  | ReturnType<typeof getMyProjectViewSuccess>;
