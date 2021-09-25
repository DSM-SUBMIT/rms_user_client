export const CHOOSEFIELDTITLE = '분야 선택';
export const FIELDS: Array<FieldMapPropsType> = [
  { id: 'web', content: '웹' },
  { id: 'app', content: '앱' },
  { id: 'game', content: '게임' },
  { id: 'embedded', content: '임베디드' },
  { id: 'security', content: '보안' },
  { id: 'aiAndBigData', content: '인공지능/빅데이터' },
];

export type CheckStateType = {
  web: boolean;
  app: boolean;
  game: boolean;
  embedded: boolean;
  security: boolean;
  aiAndBigData: boolean;
};

export type DataIdType = 'web' | 'app' | 'game' | 'embedded' | 'security' | 'aiAndBigData';

export type FieldMapPropsType = {
  id: DataIdType;
  content: string;
};
