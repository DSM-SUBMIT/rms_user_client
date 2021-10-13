import { all } from 'redux-saga/effects';
import mainSaga from './main';
import detailReportSaga from './detailReport';
import loginSaga from './login';
import detailPlanSaga from './detailPlan';
import headerSaga from './header';
import writePlanSaga from './writePlan';
import infoSaga from './info';
import writeReportSaga from './writeReport';

export default function* rootSaga() {
  yield all([
    mainSaga(),
    detailReportSaga(),
    loginSaga(),
    headerSaga(),
    infoSaga(),
    detailPlanSaga(),
    writePlanSaga(),
    writeReportSaga()
  ]);
}
