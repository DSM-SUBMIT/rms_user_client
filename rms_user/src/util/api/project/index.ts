import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const createProject = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.post(uri.project);
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
