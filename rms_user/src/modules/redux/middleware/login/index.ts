import { getToken } from '../../../../util/api/login';
import { TOKEN } from '../../action/login/interface';
import { call, put, takeLatest } from 'redux-saga/effects';

const getTokenSaga = function* (): any {
  const SUCCESS = 'LOGIN/TOKEN_SUCCESS';
  const FAILURE = 'LOGIN/TOKEN_FAILURE';
  try {
    const response = yield call(getToken);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'LOGIN/TOKEN' },
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

function* loginSaga() {
  yield takeLatest(TOKEN, getTokenSaga);
}

export default loginSaga;
