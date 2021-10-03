import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getMypage = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.mypage);
  } catch (error) {
    throw error;
  }
};
