import { error } from '../../../../../models/error';

interface ContentState{
    content: string;
    goal: string;
    includeOthers: string;
    includeCode: boolean;
    includeOutcome: boolean;
    includeResultReport: boolean;
    isSuccessSave: boolean;
    isSuccessSubmit: boolean;
    plannedEndDate : string;
    plannedStartDate: string;
    error: error | null;
    projectId: number;
}

export default ContentState;