import { combineReducers } from 'redux';
import comment from './comment';
import post from './post';
import sub from './sub';

const rootReducers = combineReducers({ comment, post, sub });

export default rootReducers;
