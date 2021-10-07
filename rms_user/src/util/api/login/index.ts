import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getToken = async (tokenRequest: string) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.token + '?code=' + tokenRequest);
    localStorage.setItem('access_token', response.data.accessToken);
    localStorage.setItem('refresh_token', response.data.refreshToken);
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const request = getRequest();
    const { data } = await request.put<{ accessToken: string }>(
      uri.token,
      {},
      {
        headers: {
          'X-Refresh-Token': localStorage.getItem('refresh_token'),
        },
      },
    );
    localStorage.setItem('access_token', data.accessToken);
    return data;
  } catch (error) {
    throw error;
  }
};
