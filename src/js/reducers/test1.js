import {
  APP_TEST
} from "../constants/test1";
import {createReducer} from 'redux-immutablejs';
import {fromJS} from 'immutable';

const initialState = fromJS({
  test1: {
    data: ""
  },
});


export default createReducer(initialState, {

  [APP_TEST]: (state, actions) => {
    return state.updateIn(['test1', 'data'], v => actions.data)
  }
})
