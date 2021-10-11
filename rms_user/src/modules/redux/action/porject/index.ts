import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';
import { CREATE_PROJECT, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from './interface';

export const setCreateProject = createAction(CREATE_PROJECT);

export type ProjectActionType = ReturnType<typeof setCreateProject>;
