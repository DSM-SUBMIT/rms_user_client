import { all } from 'redux-saga/effects';
import mainSaga from './main';
import detailReportSaga from './detailReport';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([mainSaga(), detailReportSaga(), loginSaga()]);
}
