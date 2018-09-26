import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducers from './js/reducers';
import store from './store';
import rootRoute from './routes/routes'

import registerServiceWorker from './registerServiceWorker';

let storeData = createStore(reducers)

ReactDOM.render(<Provider store={store}>
  {/*<Routes />*/}
  <Router history={browserHistory} routes={rootRoute}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
