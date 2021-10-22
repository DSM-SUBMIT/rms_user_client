export const TechStatck = '사용한 기술 스택';
export const Plan = '계획서';
export const Report = '보고서';
export const GitHub = 'Github';
export const Api = 'API 서비스';
export const Details = '기능 명세';

export const ClassificationSelect = [
  '프로젝트 실무 1',
  '프로젝트 실무 2',
  '소프트웨어 공학',
  '개인 프로젝트',
  '팀 프로젝트',
  '동아리 프로젝트',
];
export const TeacherSelect = [
  '1학년 담당 선생님',
  '2학년 담당 선생님',
  '3학년 담당 선생님',
  '동아리 담당 선생님',
];

export type ProjectCreateType = {
  fieldList: [];
  memberList: UsersListType;
  projectName: string;
  projectType: string;
  teacher: string;
  teamName: string;
  techStacks: string;
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
