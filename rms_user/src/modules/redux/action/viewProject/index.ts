import { error } from '../../../../models/error';
import {
  GET_PROJECT_CONTENTS,
  GET_PROJECT_CONTENTS_SUCCESS,
  GET_PROJECT_CONTENTS_FAILURE,
  ID,
} from './interface';
import { createAction } from 'typesafe-actions';
import { ViewProjectType } from '../../../../constance/viewProject';

export const getProjectView = createAction(GET_PROJECT_CONTENTS)();
export const getProjectViewSuccess = createAction(GET_PROJECT_CONTENTS_SUCCESS)<ViewProjectType>();
export const getProjectViewFailure = createAction(GET_PROJECT_CONTENTS_FAILURE)<error>();
export const setId = createAction(ID)<string>();

export type viewProjectActionType =
  | ReturnType<typeof getProjectView>
  | ReturnType<typeof getProjectViewSuccess>
  | ReturnType<typeof getProjectViewFailure>
  | ReturnType<typeof setId>;
