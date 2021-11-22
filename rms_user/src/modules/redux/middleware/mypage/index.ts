import { getMypage } from '../../../../util/api/mypage';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MYPAGE_FEED } from '../../action/mypage/interface';

const mypageGetSaga = function* (): any {
  const type = 'MYPAGE/GET_MYPAGE_FEED';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getMypage, accessToken);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.respons.data, type: type },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

function* mypageSaga() {
  yield takeLatest(GET_MYPAGE_FEED, mypageGetSaga);
}

export default mypageSaga;
