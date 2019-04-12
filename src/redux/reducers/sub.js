const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUB_ADD':
      return [...new Set([...state, action.sub])].sort();
    case 'SUB_REMOVE':
      return state.filter(item => action.sub !== item);
    case 'SUBS_GET':
      return state;
    default:
      return state;
  }
};
