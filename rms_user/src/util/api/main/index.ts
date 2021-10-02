import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getMain = async (access_token: string, page: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.main + '?page=' + page + '&size=5');
  } catch (error) {
    throw error;
  }
};
