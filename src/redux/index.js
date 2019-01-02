import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import comment from './reducers/comment';
import post from './reducers/post';
import sub from './reducers/sub';

const reducer = combineReducers({
  comment,
  post,
  sub,
});

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

const persistedState = {
  sub: JSON.parse(localStorage.getItem('subs') || '[]'),
};

const store = createStore(reducer, persistedState, applyMiddleware(...middleware));

store.subscribe(() => {
  localStorage.setItem('subs', JSON.stringify(store.getState().sub));
});

export default store;
