import { all } from 'redux-saga/effects';
import mainSaga from './main';
import loginSaga from './login';
import headerSaga from './header';

export default function* rootSaga() {
  yield all([mainSaga(), loginSaga(), headerSaga()]);
}
