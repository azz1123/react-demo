import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import {createLogger} from 'redux-logger';

import reducer,{initialState} from './reducers/index';

const middlewares = [thunk];

//创建createStore
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

//抛出
export default function configureStore(initialState){
  return createStoreWithMiddleware(root)
}
