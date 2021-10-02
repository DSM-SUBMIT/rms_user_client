import { all } from 'redux-saga/effects';
import mypage from './mypage';

export default function* rootSaga() {
  yield all([mypage()]);
}
