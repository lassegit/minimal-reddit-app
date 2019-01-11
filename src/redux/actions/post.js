import { POSTS_ERROR, POSTS_REQUEST, POSTS_SUCCESS } from '../actionTypes';
import { REDDIT_URL } from '../../utils/constants';

export const getPosts = sub => dispatch => {
  dispatch({ type: POSTS_REQUEST, sub });

  return fetch(`${REDDIT_URL}/${sub}/top.json?sort=top&t=week`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`${res.status} error occured.`);
      }

      return res.json();
    })
    .then(posts => dispatch({ type: POSTS_SUCCESS, posts, sub }))
    .catch(err => dispatch({ type: POSTS_ERROR, err, sub }));
};
