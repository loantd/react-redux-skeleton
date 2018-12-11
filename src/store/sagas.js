import { all } from 'redux-saga/effects';

import alertSaga from '../app/view/containers/alert/saga';
import HomeWatcher from '../app/view/containers/Home/saga';

export default function* sagas() {
  yield all([
    alertSaga,
    HomeWatcher
  ]);
}

