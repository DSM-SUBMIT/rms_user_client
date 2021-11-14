import { SaveReport, SubmitReport } from '../../../../util/api/writeReport';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_SAVE_REPORT, GET_SUBMIT_REPORT } from '../../action/writeReport/interface';
import { reducerType } from '../../reducer';
import ReportContentState from '../../reducer/writeReport/interface';
import { WriteReportRequest } from '../../../../util/api/writeReport';

const getStateFunc = (state: reducerType): ReportContentState => state.writeReport;

const saveReportSaga = function* (): any {
  const SUCCESS = `GET_SAVE_REPORT_SUCCESS`;
  const FAILURE = `GET_SAVE_REPORT_FAILURE`;
  const state = yield select(getStateFunc);
  const request = WriteReportRequest(state);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(SaveReport, accessToken, request, state.projectId);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: GET_SAVE_REPORT },
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

const submitReportSage = function* (): any {
    const SUCCESS = 'GET_SUBMIT_REPORT_SUCCESS';
    const FAILURE = 'GET_SUBMIT_REPORT_FAILURE';
    const state = yield select(getStateFunc);
    const request = WriteReportRequest(state);
    const accessToken = localStorage.getItem('access_token') || '';
    try {
        const response = yield call(SubmitReport, accessToken, request, state.projectId);
        yield put({
          type: SUCCESS,
          payload: response ? response.data : null,
        });
      } catch (error: any) {
        if (error.response?.data) {
          yield put({
            type: FAILURE,
            payload: { ...error.response.data, type: GET_SUBMIT_REPORT },
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


function* writeReportSaga() {
  yield takeLatest(GET_SAVE_REPORT, saveReportSaga);
  yield takeLatest(GET_SUBMIT_REPORT, submitReportSage);
}

export default writeReportSaga;
