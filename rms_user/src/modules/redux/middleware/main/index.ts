import { getMain } from '../../../../util/api/main';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_MAIN_FEED } from '../../action/main/interface';

const mainGetSaga = function* (): any {
  const type = 'GET_MAIN_FEED';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getMain, accessToken);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
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

function* mainSaga() {
  yield takeLatest(GET_MAIN_FEED, mainGetSaga);
}

export default mainSaga;
