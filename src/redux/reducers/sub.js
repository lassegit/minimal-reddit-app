import { SUB_ADD, SUB_REMOVE, SUBS_GET } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SUB_ADD:
      if (state.includes(action.sub)) return state; // prevent duplicate
      return [...state, action.sub].sort();
    case SUB_REMOVE:
      return state.filter(item => action.sub !== item);
    case SUBS_GET:
      return state;
    default:
      return state;
  }
};
