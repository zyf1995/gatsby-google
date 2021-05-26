import { all } from 'redux-saga/effects';
import countSaga from './counter.saga';

export default function* rootSaga () {
  yield all([countSaga()])
}