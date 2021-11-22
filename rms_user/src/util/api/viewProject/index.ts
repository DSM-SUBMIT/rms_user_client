import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getProjectView = async (access_token: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.project + `/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMyProjectView = async (access_token: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.myprojectview + `/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
