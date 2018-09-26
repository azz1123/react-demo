import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../js/reducers';
import promiseMiddleware from '../api/promiseMiddleware';

export default function configureStore(history, initialState) {


  const logger1 = ({getState}) => next => action => {
    let result = next(action);
    return result;
  };

  const stateTransformer = state => {
    let newState = {};
    Object.keys(state).forEach(x => {
      // if (Iterable.isIterable(state[x])) {
      //   newState[x] = state[x].toJS();
      // } else {
      newState[x] = state[x];
      // }
    });
    return newState;
  };

  const logger = createLogger();
  const middlewares = [thunk, promiseMiddleware,logger1];
  let store = createStore(
    rootReducer,
    applyMiddleware(thunk, promiseMiddleware, logger)
  )

  return store
}


