import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer, reducer2 } from './module/reducer';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const store = createStore(reducer);

/**
 * Redux toolkit + Redux DevTool
 */
const store = configureStore({ reducer: reducer2 });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
