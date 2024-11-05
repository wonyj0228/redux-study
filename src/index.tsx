import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer, reducer2 } from './module/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { toDos } from './module/slice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const store = createStore(reducer);

/**
 * Redux toolkit + Redux DevTool
 */
const store = configureStore({ reducer: toDos.reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
