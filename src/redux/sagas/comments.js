import api from '../../utils/api';
import { call, put } from 'redux-saga/effects'; // eslint-disable-line
import { REDDIT_URL } from '../../utils/constants';

export function* getComments(action) {
  const { sub, id } = action;
  try {
    const data = yield call(api.get, `${REDDIT_URL}/${sub}/comments/${id}/comments.json?sort=top`);
    yield put({ type: 'COMMENTS_SUCCESS', data, sub, id });
  } catch (error) {
    yield put({ type: 'COMMENTS_ERROR', error, sub, id });
  }
}
