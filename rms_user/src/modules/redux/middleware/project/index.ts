import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { CREATE_PROJECT } from '../../action/porject/interface';
import { createProject, projectCreateStateToRequest } from '../../../../util/api/project';
import ProjectState from '../../reducer/project/interface';
import MypageState from '../../reducer/mypage/interface';
const getStateFunc = (state: reducerType): ProjectState => state.project;

const setProjectSaga = function* (): any {
  const type = 'PROJECT/CREATE_PROJECT';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const request = projectCreateStateToRequest(state);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(createProject, accessToken, request);
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

function* projectSaga() {
  yield takeLatest(CREATE_PROJECT, setProjectSaga);
}

export default projectSaga;
