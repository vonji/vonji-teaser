import _ from 'lodash';

export const newAlert = (message, type) => dispatch => {
  const alertId = _.uniqueId("alert");
  dispatch({ type: 'NEW_ALERT', alert: { alertId, message, type } });
  setTimeout(() => dispatch({
    type: 'CLEAR_ALERT',
    alertId,
  }), 28000);
};
