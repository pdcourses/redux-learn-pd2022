import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

export default function makeStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...configureStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}