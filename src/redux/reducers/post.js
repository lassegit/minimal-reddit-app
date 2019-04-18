const initialState = {
  posts: [],
  activeSubId: '',
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, posts: [], activeSubId: action.payload.id, isLoading: true, error: false };
    case 'POSTS_SUCCESS': {
      const posts = action.data.data.children.sort((a, b) => a.data.created_utc - b.data.created_utc).reverse();
      return { ...state, posts, isLoading: false };
    }
    case 'POSTS_ERROR':
      return { ...state, error: action.error.message, isLoading: false };
    default:
      return state;
  }
};
