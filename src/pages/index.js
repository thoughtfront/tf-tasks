import React from 'react';
import Tasks from './tasks';
import { Route, Switch } from 'react-router-dom';

class Pages extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='*' component={Tasks} />
      </Switch>
    )
  }
}

export default Pages;