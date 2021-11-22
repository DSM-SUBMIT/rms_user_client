import { getToken, refreshToken } from '../../../../util/api/login';
import { REFRESH_TOKEN, TOKEN } from '../../action/login/interface';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';

const getStateFunc = (state: reducerType): string => state.login.code;

const getTokenSaga = function* (): any {
  const SUCCESS = 'LOGIN/TOKEN_SUCCESS';
  const FAILURE = 'LOGIN/TOKEN_FAILURE';
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getToken, state);
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

export const refreshTokenSaga = function* (action: any) {
  const type = 'LOGIN/REFRESH_TOKEN';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const callback = action.payload.callback;
  try {
    const response: { accessToken: string } = yield call(refreshToken);
    yield put({ type: SUCCESS });
    localStorage.setItem('access_token', response.accessToken);
    yield call(callback);
  } catch (error: any) {
    console.log(error);
    if (error.response?.data) {
      console.log(1);
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
    } else {
      console.log(2);
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

function* loginSaga() {
  yield takeLatest(TOKEN, getTokenSaga);
  yield takeLatest(REFRESH_TOKEN, refreshTokenSaga);
}

export default loginSaga;
