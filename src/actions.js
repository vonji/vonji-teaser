export const NEW_ALERT = 'NEW_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

export const clearAlert = id => dispatch => {
  dispatch({ type: CLEAR_ALERT, id });
}

export const newAlert = (message, type, id) => dispatch => {
  dispatch({ type: NEW_ALERT, alert: { id, message, type } });
  setTimeout(clearAlert, 28000);
};
