export const ReportContentForm = [
    'I. 프로젝트 진행 동기 및 목적',
    'II. 이론적 배경 (기존 사례 또는 문헌 연구 결과)',
    'III. 프로젝트 진행 과정',
    'IV. 프로젝트 결과',
    'V. 결론 및 고찰',
    '[참고문헌]'
]

export interface ReportContentRequest {
    content: string;
    videoUrl : string;
}