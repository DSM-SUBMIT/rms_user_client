import { error } from '../../../../../models/error';
import { MemberListType } from '../../../../../constance/viewProject';

interface ViewMyProjectState {
  projectName: string;
  projectType: string;
  serviceUrl: string;
  teamName: string;
  techStack: string;
  memberList: Array<MemberListType>;
  fieldList: Array<string>;
  docsUrl: string;
  githubUrl: string;
  projectId: number;
  error: error | null;
  teacher: string;
  isPlanAccepted: boolean;
  isPlanSubmitted: boolean;
  isReportAccepted: boolean;
  isReportSubmitted: boolean;
}

export default ViewMyProjectState;
