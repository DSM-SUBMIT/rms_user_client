export const CHOOSEFIELDTITLE = '분야 선택';
export const FIELDS = [
  { id: 'web', content: '웹' },
  { id: 'app', content: '앱' },
  { id: 'game', content: '게임' },
  { id: 'embedded', content: '임베디드' },
  { id: 'security', content: '보안' },
  { id: 'aiAndBigData', content: '인공지능/빅데이터' },
];

export type CheckState = {
  web: boolean;
  app: boolean;
  game: boolean;
  embedded: boolean;
  security: boolean;
  aiAndBigData: boolean;
};
