import { all } from 'redux-saga/effects';

import alertSaga from '../app/views/containers/Alert/saga';
import HomeWatcher from '../app/views/containers/Home/saga';

export default function* sagas() {
  yield all([
    alertSaga,
    HomeWatcher
  ]);
}

