import { all } from 'redux-saga/effects';
import mainSaga from './main';
import loginSaga from './login';
import mypageSaga from './mypage';

export default function* rootSaga() {
  yield all([mainSaga(), loginSaga(), mypageSaga()]);
}
