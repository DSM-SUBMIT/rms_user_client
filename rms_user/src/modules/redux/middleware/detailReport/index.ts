import { getDetailReport } from '../../../../util/api/detailReport';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_REPORT } from '../../action/detailReport/interface';
import { reducerType } from '../../reducer';
import DetailReportState from '../../reducer/detailReport/interface';

const getStateFunc = (state: reducerType): DetailReportState => state.detailReport;

const detailReportGetSaga = function* (): any {
  const type = 'DETAILREPORT/GET_REPORT';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getDetailReport, accessToken, state.id);
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

function* detailReportSaga() {
  yield takeLatest(GET_REPORT, detailReportGetSaga);
}

export default detailReportSaga;
