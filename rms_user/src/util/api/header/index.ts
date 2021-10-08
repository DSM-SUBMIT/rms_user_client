import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getName = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.header);
  } catch (error) {
    throw error;
  }
};
