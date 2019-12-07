/**
 * Created by zhujiaqi on 2017/4/20.
 */

import User from './User';
import Policy from './Policy';
import Main from './Main';

export default function registerModels(app) {
  app.model(User);
  app.model(Policy);
  app.model(Main);
}
