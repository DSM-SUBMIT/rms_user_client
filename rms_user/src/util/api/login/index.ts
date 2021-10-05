import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getToken = async (tokenRequest: string) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.token + '?code=' + tokenRequest);
    localStorage.setItem('access_token', response.data.accessToken);
    localStorage.setItem('refresh_token', response.data.refreshToken);
    return response;
  } catch (error) {
    throw error;
  }
};
