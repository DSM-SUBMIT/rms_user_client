import uri from '../../../constance/uri';
import { getRequest } from '../default';

export const getToken = async () => {
  try {
    const request = getRequest();
    return await request.get(uri.token);
  } catch (error) {
    throw error;
  }
};
