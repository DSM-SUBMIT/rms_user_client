import { all } from 'redux-saga/effects';
import mypage from './mypage';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([loginSaga(), mypage()]);
}
