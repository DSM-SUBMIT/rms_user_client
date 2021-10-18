import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getProjectView = async (access_token: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.projectview + `/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
