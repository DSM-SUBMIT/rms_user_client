import { all } from 'redux-saga/effects';
<<<<<<< HEAD
import detailPlanSaga from './detailPlan';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([loginSaga(), detailPlanSaga()]);
=======
import mainSaga from './main';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([mainSaga(), loginSaga()]);
>>>>>>> main
}
