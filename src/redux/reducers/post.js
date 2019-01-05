import { POSTS_ERROR, POSTS_REQUEST, POSTS_SUCCESS } from '../actionTypes';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return Object.assign({}, { posts: [], isLoading: true, error: false });
    case POSTS_SUCCESS:
      return Object.assign({}, { posts: action.posts.data.children, isLoading: false });
    case POSTS_ERROR:
      return Object.assign({}, { posts: [], error: action.err.message, isLoading: false });
    default:
      return state;
  }
};
