import { MemberType } from '../../../../../constance/detailPlan';
import { error } from '../../../../../models/error';

interface DetailPlanState {
  content: string;
  goal: string;
  includeCode: boolean;
  includeOthers: string;
  includeOutcome: boolean;
  includeResultReport: boolean;
  isTeam: boolean;
  members: Array<MemberType>;
  plannedEndData: string;
  plannedStartData: string;
  projectName: string;
  writer: string;
  writerStudentNumber: number;
  id: string;
  error: error | null;
}

export default DetailPlanState;
