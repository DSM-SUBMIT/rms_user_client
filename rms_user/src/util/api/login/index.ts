import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getToken = async (tokenRequest: string) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.token + '?code=' + tokenRequest);
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
  } catch (error) {
    throw error;
  }
};
