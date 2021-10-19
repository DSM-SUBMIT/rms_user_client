import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import ViewProjectState from '../../reducer/viewProject/interface';
import { GET_MY_PROJECT_CONTENTS } from '../../action/viewProject/interface';
import { getMyProjectView } from '../../../../util/api/viewProject';
import MainState from '../../reducer/main/interface';
const getStateFunc = (state: reducerType): ViewProjectState => state.viewProject;
const getMainStateFunc = (state: reducerType): MainState => state.main;

const viewMyProjectGetSaga = function* (): any {
  const type = 'PROJECT/GET_GET_MY_PROJECT_CONTENTS';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const MypageState = yield select(getMainStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getMyProjectView, accessToken, MypageState.currentProjectId);

    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
    console.log('test', response);
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
  yield takeLatest(GET_MY_PROJECT_CONTENTS, viewMyProjectGetSaga);
}

export default viewProjectSaga;
