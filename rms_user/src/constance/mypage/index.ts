export const PROJECT = '프로젝트';
export const CREATE_PROJECT = '새로운 프로젝트 생성하기';

export type ProjectListType = {
  fieldList: Array<string>;
  id: number;
  projectName: string;
  projectType: string;
  teamName: string;
};

export type CheckStateType = {
  web: boolean;
  app: boolean;
  game: boolean;
  embedded: boolean;
  security: boolean;
  aiAndBigData: boolean;
};
