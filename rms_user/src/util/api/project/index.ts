import { ProjectCreateType } from '../../../constance/project';
import uri from '../../../constance/uri';
import { reducerType } from '../../../modules/redux/reducer';
import { getRequestWithAccessToken } from '../default';

export const projectCreateStateToRequest = (state: reducerType['project']): ProjectCreateType => {
  return {
    fieldList: state.fieldList,
    memberList: state.memberList,
    projectName: state.projectName,
    projectType: state.projectType,
    teacher: state.teacher,
    teamName: state.teamName,
    techStacks: state.techStacks,
  };
};

export const createProject = async (access_token: string, state: ProjectCreateType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.post(uri.project, state);
  } catch (error) {
    throw error;
  }
};

export const getUserList = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.userList);
    return response;
  } catch (error) {
    throw error;
  }
};

export const correctionProject = async (access_token: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.put(uri.project + `/${id}`);
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (access_token: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.delete(uri.project + `/${id}`);
  } catch (error) {
    throw error;
  }
};

export const modifyUrl = async (access_token: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.delete(uri.project + `/${id}` + '/url');
  } catch (error) {
    throw error;
  }
};
