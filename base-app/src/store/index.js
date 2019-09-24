import { combineReducers, createStore } from 'redux';

import appReducer from '../reducers/appReducer';

const rootReducer = combineReducers({
  appManager: appReducer
});

const store = createStore(rootReducer);

export default store;
