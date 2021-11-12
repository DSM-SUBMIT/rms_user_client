import { error } from '../../../../../models/error';

interface ReportContentState{
    content: string[];
    videoUrl: string;
    projectId: number;
    error: error | null;
    isSuccessSave: boolean;
    isSuccessSubmit: boolean;
}

export default ReportContentState;