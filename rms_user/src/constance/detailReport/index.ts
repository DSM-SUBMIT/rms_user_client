export const REPORT_COVER = '보고서 겉표지 (학생 작성용)';
export const PROJECT_REPORT = '프로젝트 보고서';
export const SUBMITTER = '제출자';
export const TEACHER = '담당교사 확인';
export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const SUBTITLE = '보고서 작성 요령';
export const DOWNLOAD = '다운로드';

export type DetailReportResponseType = {
  content: string;
  field: Array<string>;
  projectName: string;
  projectType: string;
  writerStudentNumber: number | null;
  isTeam: boolean;
  writer: string;
};
