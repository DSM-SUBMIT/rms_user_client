import { CheckStateType } from '../../../constance/main';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

const setField = (field: CheckStateType) => {
  let fieldList: Array<string> = [];
  if (field.web === true) fieldList.push('WEB');
  if (field.app === true) fieldList.push('APP');
  if (field.game === true) fieldList.push('GAME');
  if (field.embedded === true) fieldList.push('EMBEDDED');
  if (field.aiAndBigData === true) fieldList.push('AI_BIGDATA');
  if (field.security === true) fieldList.push('SECURITY');
  return fieldList.join(',');
};

export const getMain = async (access_token: string, page: string, field: CheckStateType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.main + '?page=' + page + '&size=5&field=' + setField(field));
  } catch (error) {
    throw error;
  }
};
