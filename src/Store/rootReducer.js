import {combineReducers} from 'redux';
import {mainReducer} from './Reducers';
import {reducer} from './reducer';
import {reducerFile} from './reducerFile';
const rootReducer = combineReducers({mainReducer, reducer, reducerFile});
export default rootReducer;
