import { COMMENTS_ERROR, COMMENTS_REQUEST, COMMENTS_SUCCESS } from '../actionTypes';

const initialState = {
  comments: [],
  post: {},
  isLoading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return Object.assign({}, { post: {}, comments: [], isLoading: true, error: null });
    case COMMENTS_SUCCESS:
      return Object.assign(
        {},
        {
          post: action.comments[0].data.children[0].data,
          comments: action.comments[1].data.children,
          isLoading: false,
        },
      );
    case COMMENTS_ERROR:
      return Object.assign({}, { comments: [], isLoading: false, error: true });
    default:
      return state;
  }
};
