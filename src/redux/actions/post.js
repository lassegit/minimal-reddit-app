import { POSTS_ERROR, POSTS_REQUEST, POSTS_SUCCESS } from '../actionTypes';
import { REDDIT_URL } from '../../utils/constants';

export const getPosts = sub => dispatch => {
  dispatch({ type: POSTS_REQUEST });

  return fetch(`${REDDIT_URL}/${sub}/top.json?sort=top&t=week`)
    .then(res => res.json())
    .then(posts => dispatch({ type: POSTS_SUCCESS, posts }))
    .catch(err => dispatch({ type: POSTS_ERROR, err }));
};
