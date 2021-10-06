import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getMypage = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.mypage);
    return response;
  } catch (error) {
    throw error;
  }
};
