export const Checkbox = [
    {
        type: "checkbox",
        id : "report",
        span : "결과보고서",
        onChange : "onChangeIncludeResultReport"
    },
    {
        type: "checkbox",
        id : "code",
        span : "프로그램코드",
        onChage : "onChangeIncludeCode"
    },
    {
        type: "checkbox",
        id : "video",
        span : "실행물(영상 또는 사진)",
        onchange : "onChangeIncludeOutcome"
    },
    {
        type: "text",
        id : "etc",
        span : "기타",
        onchange : "onChangeIncludeOthers"
    }
]

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
