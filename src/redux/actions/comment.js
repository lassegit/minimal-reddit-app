import { COMMENTS_ERROR, COMMENTS_REQUEST, COMMENTS_SUCCESS } from '../actionTypes';
import { REDDIT_URL } from '../../utils/constants';

export const getComments = (sub, postId) => dispatch => {
  dispatch({ COMMENTS_REQUEST });

  return fetch(`${REDDIT_URL}/${sub}/comments/${postId}/comments.json`)
    .then(res => res.json())
    .then(comments => dispatch({ type: COMMENTS_SUCCESS, comments }))
    .catch(err => dispatch({ type: COMMENTS_ERROR, err }));
};
