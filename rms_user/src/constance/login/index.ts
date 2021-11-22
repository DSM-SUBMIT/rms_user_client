export const LOGO = 'RMS';
export const LOGIN_EXPLAIN = '프로젝트를 생성해서 보고서를 작성해보세요!';
export const LOGIN_WITH_SCHOOL_EMAIL = '학교 이메일로 로그인';
export const LOGIN = 'Login';

export type loginResponseType = {
  accessToken: string;
  refreshToken: string;
  name: string;
};
