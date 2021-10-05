import { CheckStateType } from '../../../constance/mypage';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getMypage = async (access_token: string, field: CheckStateType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.mypage);
    return response;
  } catch (error) {
    throw error;
  }
};

export const SetField = (field: CheckStateType) => {
  let fieldList: Array<string> = [];
  if (field.web === true) fieldList.push('WEB');
  if (field.app === true) fieldList.push('APP');
  if (field.game === true) fieldList.push('GAME');
  if (field.embedded === true) fieldList.push('EMBEDDED');
  if (field.aiAndBigData === true) fieldList.push('AI_BIGDATA');
  if (field.security === true) fieldList.push('SECURITY');
  return fieldList.join(',');
};
