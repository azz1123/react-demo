// import {showMsg, toggleLoading} from 'ActionsFolder/CommonActions';
// import { message } from 'antd';
// import auth from 'APIFolder/auth';
import {Link, withRouter, router} from 'react-router';


export default function promiseMiddleware() {
  return next => action => {
    const {promise, type, isFetching, ...rest} = action;

    if(!promise) {
      return next(action);
    }
    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({...rest, isFetching: true, type: REQUEST});
    return promise
      .then(response => ({json: response.data, status: response.statusText}))
      .then(({json, status}) => {
        next({...rest, json, isFetching: false, type: SUCCESS});
        return false;
      })
      .catch(error => {
        console.log(error);
        next({...rest, error, isFetching: false, type: FAILURE});
        next(console.log("服务器内部错误，请稍后再试！"));
        return false;
      })
  }
}
