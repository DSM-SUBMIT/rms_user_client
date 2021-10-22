import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { getDetailPlan } from '../../../../util/api/detailPlan';
import { reducerType } from '../../reducer';
import DetailPlanState from '../../reducer/detailPlan/interface';
import { PROJECTDELETE } from '../../action/porject/interface';

const getStateFunc = (state: reducerType): DetailPlanState => state.detailPlan;

const setDeleteProjectSaga = function* (): any {
  const type = 'PROJECT/DELETE_PROJECTDELETE';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getDetailPlan, accessToken, state.id);
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

function* deleteProjectSaga() {
  yield takeLatest(PROJECTDELETE, setDeleteProjectSaga);
}

export default deleteProjectSaga;
