import { all } from 'redux-saga/effects';
import mainSaga from './main';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([mainSaga()]);
  yield all([loginSaga()]);
}
