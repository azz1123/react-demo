import React from 'react';
import {Router,Route, IndexRoute,browserHistory} from 'react-router';
import Home from './routes/ManagePage/routes/Hello/Hello';

import List from './routes/ManagePage/routes/List/List';
import NotFound from './routes/ManagePage/routes/NotFound/NotFound';

import App from './routes/index';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={App}/>
          <Route path="home" component={Home}/>
          <Route path="list" component={List}/>
          <Route path="notFound" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

export default Routes;
