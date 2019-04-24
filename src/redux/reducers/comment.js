const initialState = {
  comments: [],
  post: {},
  isLoading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COMMENTS_REQUEST':
      return { ...state, post: {}, comments: [], isLoading: true, error: null };
    case 'COMMENTS_SUCCESS':
      return {
        ...state,
        post: action.data[0].data.children[0].data,
        comments: action.data[1].data.children,
        isLoading: false,
      };
    case 'COMMENTS_ERROR':
      return { ...state, comments: [], isLoading: false, error: true };
    default:
      return state;
  }
};