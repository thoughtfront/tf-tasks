import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Pages from '../pages';

function App() {
  return (
    <div className="app">
        <div className='focus-page'>
            <Switch>
                <Route path='*' component={Pages} />
            </Switch>
        </div>
    </div>
  );
}

export default withRouter(App);
