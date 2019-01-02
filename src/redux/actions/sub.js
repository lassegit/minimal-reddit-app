import { SUB_ADD, SUB_REMOVE, SUBS_GET } from '../actionTypes';

export const addSub = sub => ({ type: SUB_ADD, sub });

export const removeSub = sub => ({ type: SUB_REMOVE, sub });

export const getSubs = () => getState => ({
  type: SUBS_GET,
  subreddits: getState().subreddits,
});
