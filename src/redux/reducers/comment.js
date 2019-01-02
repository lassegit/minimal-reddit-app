import { COMMENTS_ERROR, COMMENTS_REQUEST, COMMENTS_SUCCESS } from '../actionTypes';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return Object.assign({}, { comments: [], isLoading: true, error: null });
    case COMMENTS_SUCCESS:
      return Object.assign({}, { comments: action.comments, isLoading: false });
    case COMMENTS_ERROR:
      return Object.assign({}, { comments: [], isLoading: false, error: true });
    default:
      return state;
  }
};
