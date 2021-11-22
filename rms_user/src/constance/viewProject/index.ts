export const TechStatck = '사용한 기술 스택';
export const Plan = '계획서';
export const Report = '보고서';
export const GitHub = 'Github';
export const Api = 'API 서비스';
export const Details = '기능 명세';

export type MemberListType = {
  email: string;
  name: string;
  role: string;
  id: number;
};

export type ViewProjectType = {
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  techStack: string;
  memberList: [];
  fieldList: [];
  docsUrl: string;
  githubUrl: string;
  id: number;
};

export type ViewMyProjectType = {
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  techStack: string;
  memberList: [];
  fieldList: [];
  docsUrl: string;
  githubUrl: string;
  id: number;
  teacher: string;
  isPlanAccepted: boolean;
  isPlanSubmitted: boolean;
  isReportAccepted: boolean;
  isReportSubmitted: boolean;
  writer: boolean;
};
