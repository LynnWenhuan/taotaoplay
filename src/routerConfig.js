/**
 * Created by zhujiaqi on 2017/4/20.
 */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'dva/router';

import MainIndex from './routes/MainIndex';
import PolicyPage from './routes/PolicyPage';

export default function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainIndex} />
        <Route exact path="/policy" component={PolicyPage} />
      </Switch>
    </Router>
  );
}
