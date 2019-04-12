import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducers from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

const persistedState = {
  sub: JSON.parse(localStorage.getItem('subs') || '[]'),
};

const store = createStore(rootReducers, persistedState, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);

store.subscribe(() => {
  localStorage.setItem('subs', JSON.stringify(store.getState().sub));
});

export default store;
