import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import App from '../components/App';
import UsersList from '../components/UsersList'

const Root = (props) => {
  return (
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route path="*" component={UsersList} />
        </Switch>
      </App>
    </HashRouter>
  );
};

export default Root;
