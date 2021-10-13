import { SavePlan, SubmitPlan } from '../../../../util/api/writePlan';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_SAVE_PLAN, GET_SUBMIT_PLAN } from '../../action/writePlan/interface';
import { reducerType } from '../../reducer';
import ContentState from '../../reducer/writePlan/interface';

const getStateFunc = (state: reducerType): ContentState => state.writePlan;

const savePlanSaga = function* (): any {
  const type = 'WRITE_PLAN/GET_SAVE_PLAN';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(SavePlan, accessToken, state.body, state.projectId);
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

const submitPlanSage = function* (): any {
    const SUCCESS = 'GET_SUBMIT_PLAN_SUCCESS';
    const FAILURE = 'GET_SUBMIT_PLAN_FAILURE';
    const state = yield select(getStateFunc);
    const accessToken = localStorage.getItem('access_token') || '';
    try {
        const response = yield call(SubmitPlan, accessToken, state.body, state.projectId);
        yield put({
          type: SUCCESS,
          payload: response ? response.data : null,
        });
      } catch (error: any) {
        if (error.response?.data) {
          yield put({
            type: FAILURE,
            payload: { ...error.response.data, type: GET_SUBMIT_PLAN },
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


function* writePlanSaga() {
  yield takeLatest(GET_SAVE_PLAN, savePlanSaga);
  yield takeLatest(GET_SUBMIT_PLAN, submitPlanSage);
}

export default writePlanSaga;
