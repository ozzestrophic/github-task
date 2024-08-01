import {combineReducers} from 'redux';
import exploreReducer from './exploreSlice';

const rootReducer = combineReducers({
  explore: exploreReducer,
});

export default rootReducer;
