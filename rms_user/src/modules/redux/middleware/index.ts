import { all } from 'redux-saga/effects';
import detailPlanSaga from './detailPlan';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([loginSaga(), detailPlanSaga()]);
}
