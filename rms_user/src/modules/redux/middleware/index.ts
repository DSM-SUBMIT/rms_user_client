import { all } from 'redux-saga/effects';
import mainSaga from './main';
import detailReportSaga from './detailReport';
import loginSaga from './login';
import mypageSaga from './mypage';
import detailPlanSaga from './detailPlan';
import headerSaga from './header';
import writePlanSaga from './writePlan';
import infoSaga from './info';
import writeReportSaga from './writeReport';
import viewProjectSaga from './viewProject';
import viewMyProjectSaga from './viewMyProject';

export default function* rootSaga() {
  yield all([
    mainSaga(),
    detailReportSaga(),
    loginSaga(),
    headerSaga(),
    infoSaga(),
    detailPlanSaga(),
    mypageSaga(),
    writePlanSaga(),
    writeReportSaga()
    viewProjectSaga(),
    viewMyProjectSaga(),
  ]);
}
