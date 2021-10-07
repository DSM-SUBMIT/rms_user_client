export const Checkbox = [
    {
        id : "report",
        span : "결과보고서"
    },
    {
        id : "code",
        span : "프로그램코드"
    },
    {
        id : "video",
        span : "실행물(영상 또는 사진)"
    },
    {
        id : "etc",
        span : "기타"
    }
]

export interface contentTypeRequest {
    content : string;
    goal: string;
    includeCode: false;
    includeOthers: string;
    includeOutcome: false,
    includeResultReport: false,
    plannedEndDate : string;
    plannedStartDate: string;
}

export interface planStorage {
    id : number;
}