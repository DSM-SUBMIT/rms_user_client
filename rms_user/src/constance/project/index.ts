export const TechStatck = '사용한 기술 스택';
export const Plan = '계획서';
export const Report = '보고서';
export const GitHub = 'Github';
export const Api = 'API 서비스';
export const Details = '기능 명세';

export const ClassificationSelect = [
  { id: 'CLUB', content: '동아리 프로젝트' },
  { id: 'PRO1', content: '프로젝트 실무 1' },
  { id: 'PRO2', content: '프로젝트 실무 2' },
  { id: 'SOFE', content: '소프트웨어 공학' },
  { id: 'PERS', content: '개인 프로젝트' },
  { id: 'TEAM', content: '팀 프로젝트' },
];

export const TeacherSelect = [
  '1학년 담당 선생님',
  '2학년 담당 선생님',
  '3학년 담당 선생님',
  '동아리 담당 선생님',
];

export type DataIdType = 'web' | 'app' | 'game' | 'embedded' | 'security' | 'aiAndBigData';
export const FieldListSelect = [
  { id: 'WEB', content: '웹' },
  { id: 'APP', content: '앱' },
  { id: 'GAME', content: '게임' },
  { id: 'EMBEDDED', content: '임베디드' },
  { id: 'SECURITY', content: '보안' },
  { id: 'AI_BIGDATA', content: '인공지능/빅데이터' },
];

export type ProjectCreateType = {
  fieldList: Array<string>;
  memberList: Array<MemberListType>;
  projectName: string;
  projectType: string;
  teacher: string;
  teamName: string;
  techStack: string;
};

export type ProjectModifyType = {
  fieldList: Array<string>;
  memberList: Array<MemberListType>;
  projectName: string;
  projectType: string;
  teacher: string;
  teamName: string;
  techStack: string;
};

export type MemberListType = {
  email: string;
  name: string;
  role: string;
  id: number;
};

export type UsersListType = {
  users: Array<{
    email: string;
    id: number;
    name: string;
    role: string;
  }>;
};

export type UrlType = {
  docsUrl: string;
  githubUrl: string;
  serviceUrl: string;
};
