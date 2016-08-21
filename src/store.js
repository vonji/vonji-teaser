import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

export const storeProvider = (isProd) => {
  if (!isProd) {
    const logger = createLogger();
    return createStore(
      reducers,
      compose(
        applyMiddleware(thunk, promise, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
  } else {
    return createStore(
      reducers,
      applyMiddleware(thunk, promise)
    );
  }
}
