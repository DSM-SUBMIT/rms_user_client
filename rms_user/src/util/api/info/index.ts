import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const setStdNumber = async (access_token: string, stdNumber: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.patch(uri.info, { number: stdNumber });
  } catch (error) {
    throw error;
  }
};
