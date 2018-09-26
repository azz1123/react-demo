"use strict";

import configureStore from './configureStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';


let state = window.__INITIAL_STATE__ || {};

export default configureStore(createBrowserHistory, state);