import { routerReducer } from 'react-router-redux';
import * as a from './actions';
import _ from 'lodash';

const alertsReducer = (alerts= [], action) => {
  switch(action.type) {
    case a.NEW_ALERT: {
      return _.uniqBy([...alerts, action.alert], 'id');
    }
    case a.CLEAR_ALERT: {
      return _.filter(alerts, alert => alert.id !== action.id);
    }
  }
  return alerts;
};

export const reducers = (state = {}, action) => {
  return {
    alerts: alertsReducer(state.alerts, action),
    routing: routerReducer(state, action),
  };
};
