import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { GET_MY_PROJECT_CONTENTS } from '../../action/viewProject/interface';
import { getMyProjectView } from '../../../../util/api/viewProject';
import MypageState from '../../reducer/mypage/interface';
import ViewMyProjectState from '../../reducer/viewMyProject/interface';
const getStateFunc = (state: reducerType): ViewMyProjectState => state.viewMyProject;
const getMyPageStateFunc = (state: reducerType): MypageState => state.mypage;

const viewMyProjectGetSaga = function* (): any {
  const type = 'MYPROJECT/GET_MY_PROJECT_CONTENTS';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const MypageState = yield select(getMyPageStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getMyProjectView, accessToken, MypageState.currentProjectId);

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

function* viewMyProjectSaga() {
  yield takeLatest(GET_MY_PROJECT_CONTENTS, viewMyProjectGetSaga);
}

export default viewMyProjectSaga;
