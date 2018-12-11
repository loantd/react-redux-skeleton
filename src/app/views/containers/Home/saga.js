import { takeEvery, put, call, select } from 'redux-saga/effects';

import {
  GET_HOME_START
} from './constants';
import { getHomeSuccess, getHomeError } from './actions';

import { getSearchText } from './selectors';
import TestAlbum from '../../../../services/api/api.fake';

function* fetchHomeWorker(action) {
  try {
    const { getArtist } = TestAlbum;
    const text = yield select(getSearchText);
    console.log(text);
    let result;
    result = yield call([TestAlbum, getArtist]);
    yield put(getHomeSuccess(result.data));
  } catch (err) {
    yield put(getHomeError(err));
  }
}

const homeWatcher = [
  takeEvery(GET_HOME_START, fetchHomeWorker)
];
export default homeWatcher;
