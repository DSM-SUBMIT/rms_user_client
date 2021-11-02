import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { deleteProject } from '../../../../util/api/project';
import { reducerType } from '../../reducer';
import { DELETE_PROJECT } from '../../action/porject/interface';
import MypageState from '../../reducer/mypage/interface';

const getMyPageStateFunc = (state: reducerType): MypageState => state.mypage;

const setDeleteProjectSaga = function* (): any {
  const type = 'PROJECT/DELETE_PROJECT';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const MypageState = yield select(getMyPageStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(deleteProject, accessToken, MypageState.currentProjectId);
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
  yield takeLatest(DELETE_PROJECT, setDeleteProjectSaga);
}

export default deleteProjectSaga;
