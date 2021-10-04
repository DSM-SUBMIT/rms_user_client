import { error } from '../../../../../models/error';

interface DetailReportState {
  content: string;
  field: Array<string>;
  projectName: string;
  projectType: string;
  videoUrl: string;
  writer: string;
  id: string;
  error: error | null;
}

export default DetailReportState;