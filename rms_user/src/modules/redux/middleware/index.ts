import { all } from 'redux-saga/effects';
<<<<<<< HEAD
import mypage from './mypage';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([loginSaga(), mypage()]);
=======
import mainSaga from './main';
import loginSaga from './login';

export default function* rootSaga() {
  yield all([mainSaga(), loginSaga()]);
>>>>>>> main
}
