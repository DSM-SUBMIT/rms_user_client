import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { MODIFY_PROJECT } from '../../action/porject/interface';
import { correctionProject, projectModifyStateToRequest } from '../../../../util/api/project';
import MypageState from '../../reducer/mypage/interface';
import ViewMyProjectState from '../../reducer/viewMyProject/interface';
const getStateFunc = (state: reducerType): ViewMyProjectState => state.projectModify;
const getMyPageStateFunc = (state: reducerType): MypageState => state.mypage;

const setModifyProjectSaga = function* (): any {
  const type = 'PROJECT/MODIFY_PROJECT';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const MypageState = yield select(getMyPageStateFunc);
  const request = projectModifyStateToRequest(state);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(
      correctionProject,
      accessToken,
      MypageState.currentProjectId,
      request,
    );
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

function* setProjectModifySaga() {
  yield takeLatest(MODIFY_PROJECT, setModifyProjectSaga);
}

export default setProjectModifySaga;
