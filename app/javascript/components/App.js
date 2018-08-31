import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Welcome from './Welcome';
import Edit from './Edit';

export const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/edit'>Edit</Link></li>
          </ul>
          <Switch>
            <Route path="/" component={Welcome} exact={true} />
            <Route path="/edit" component={Edit} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;