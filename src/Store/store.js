import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from './Saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(SagaData);

export default store;
