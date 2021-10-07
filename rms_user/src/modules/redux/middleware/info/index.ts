import { call, put, select, takeLatest } from 'redux-saga/effects';
import { setStdNumber } from '../../../../util/api/info';
import { NUMBER } from '../../action/info/interface';
import { reducerType } from '../../reducer';
import InfoState from '../../reducer/info/interface';

const getStateFunc = (state: reducerType): InfoState => state.info;

const stdNumberSaveSaga = function* (): any {
  const type = 'INFO/NUMBER';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(setStdNumber, accessToken, state.stdNumber);
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

function* infoSaga() {
  yield takeLatest(NUMBER, stdNumberSaveSaga);
}

export default infoSaga;
