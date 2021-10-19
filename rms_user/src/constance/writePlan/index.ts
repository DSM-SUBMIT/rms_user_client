export interface ContentRequest {
    content: string;
    goal: string;
    includeCode: boolean;
    includeOthers: string;
    includeOutcome: boolean,
    includeResultReport: boolean,
    plannedEndDate : string;
    plannedStartDate: string;
}
