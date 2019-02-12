import { POSTS_ERROR, POSTS_REQUEST, POSTS_SUCCESS } from '../actionTypes';

const initialState = {
  posts: [],
  sub: '',
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { ...state, posts: [], sub: action.sub, isLoading: true, error: false };
    case POSTS_SUCCESS: {
      const posts = action.posts.data.children.sort((a, b) => a.data.created_utc - b.data.created_utc).reverse();
      return { ...state, posts, isLoading: false };
    }
    case POSTS_ERROR:
      return { ...state, error: action.err.message, isLoading: false };
    default:
      return state;
  }
};
