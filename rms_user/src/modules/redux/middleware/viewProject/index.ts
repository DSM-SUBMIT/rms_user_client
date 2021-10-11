import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import ViewProjectState from '../../reducer/viewProject/interface';
import { GET_PROJECT_CONTENTS } from '../../action/viewProject/interface';
import { getProjectView } from '../../../../util/api/viewProject';
const getStateFunc = (state: reducerType): ViewProjectState => state.viewProject;

const viewProjectGetSaga = function* (): any {
  const type = 'VIEWPROJECT/GET_PROJECT_CONTENTS';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getProjectView, accessToken, state.id);
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

function* viewProjectSaga() {
  yield takeLatest(GET_PROJECT_CONTENTS, viewProjectGetSaga);
}

export default viewProjectSaga;
