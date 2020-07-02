import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={props => <LoginPage {...props} />} />
        <PrivateRoute path="/" Child={HomePage} />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ Child, path }) {
  return (
    <Route
      path={path}
      render={props =>
        localStorage.getItem('isAuthenticated') == 'true' ? (
          <Child {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
