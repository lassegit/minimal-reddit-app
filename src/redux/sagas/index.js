import { all, takeLatest } from 'redux-saga/effects';
import { getComments } from './comments';
import { getPosts } from './posts';

function* rootSagas() {
  yield all([takeLatest('POSTS_REQUEST', getPosts), takeLatest('COMMENTS_REQUEST', getComments)]);
}

export default rootSagas;
