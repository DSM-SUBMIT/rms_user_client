import { all } from 'redux-saga/effects';
import mainSaga from './main';
import loginSaga from './login';
import headerSaga from './header';
import infoSaga from './info';

export default function* rootSaga() {
  yield all([mainSaga(), loginSaga(), headerSaga(), infoSaga()]);
}
