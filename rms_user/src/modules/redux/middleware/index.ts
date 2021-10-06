import { all } from 'redux-saga/effects';
import mainSaga from './main';
import loginSaga from './login';
import detailPlanSaga from './detailPlan';

export default function* rootSaga() {
  yield all([mainSaga(), loginSaga(), detailPlanSaga()]);
}
