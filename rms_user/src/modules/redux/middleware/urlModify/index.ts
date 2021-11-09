import { modifyUrl, urlModifyStateToRequest } from '../../../../util/api/project';
import { reducerType } from '../../reducer';
import urlModifyState from '../../reducer/urlModify/interface';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { MODIFY_URL } from '../../action/porject/interface';
import MypageState from '../../reducer/mypage/interface';
const getStateFunc = (state: reducerType): urlModifyState => state.urlModify;
const getMyPageStateFunc = (state: reducerType): MypageState => state.mypage;

const setUrlModifySaga = function* (): any {
  const type = 'PROJECT/MODIFY_URL';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const request = urlModifyStateToRequest(state);
  const MypageState = yield select(getMyPageStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(modifyUrl, accessToken, MypageState.currentProjectId, request);
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

function* urlModifySaga() {
  yield takeLatest(MODIFY_URL, setUrlModifySaga);
}

export default urlModifySaga;
