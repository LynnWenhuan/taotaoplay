/**
 * Created by Lynnlin on 2019/12/7.
 */


export default {
  namespace: 'main',
  state: {
    needquy: null,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/policy') {
    //       dispatch({ type: 'getPolicyInfo', payload: query });
    //     }
    //   });
    // },
  },
};
