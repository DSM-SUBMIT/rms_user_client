import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getMain = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.main);
  } catch (error) {
    throw error;
  }
};
