import { all } from 'redux-saga/effects';
import mainSaga from './main';
import detailReportSaga from './detailReport';

export default function* rootSaga() {
  yield all([mainSaga(), detailReportSaga()]);
}
