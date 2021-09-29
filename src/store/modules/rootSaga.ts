import { all } from "redux-saga/effects";

import mySaga from './Reserve/saga';

export function* rootSaga(): any {
  return yield all([
    mySaga
  ])
}
