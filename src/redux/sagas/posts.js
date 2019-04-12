import api from '../../utils/api';
import { call, put } from 'redux-saga/effects'; // eslint-disable-line
import { REDDIT_URL } from '../../utils/constants';

export function* getPosts(action) {
  const { id } = action.payload;
  try {
    const data = yield call(api.get, `${REDDIT_URL}/${id}/top.json?sort=top&t=week`);
    yield put({ type: 'POSTS_SUCCESS', data, id });
  } catch (error) {
    yield put({ type: 'POSTS_ERROR', error, id });
  }
}
