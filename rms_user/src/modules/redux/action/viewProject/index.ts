import { error } from '../../../../models/error';
import {
  GET_PROJECT_CONTENTS,
  GET_PROJECT_CONTENTS_SUCCESS,
  GET_PROJECT_CONTENTS_FAILURE,
} from './interface';
import { createAction } from 'typesafe-actions';
import { ViewProjectType } from '../../../../constance/viewProject';

export const getProjectView = createAction(GET_PROJECT_CONTENTS)();
export const getProjectViewSuccess = createAction(GET_PROJECT_CONTENTS_SUCCESS)<ViewProjectType>();
export const getProjectViewFailure = createAction(GET_PROJECT_CONTENTS_FAILURE)<error>();

export type viewProjectActionType =
  | ReturnType<typeof getProjectView>
  | ReturnType<typeof getProjectViewSuccess>
  | ReturnType<typeof getProjectViewFailure>;
