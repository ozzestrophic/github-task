import {combineReducers} from 'redux';
import exploreReducer from './exploreSlice';
import repositoriesReducer from './repositoriesSlice';

const rootReducer = combineReducers({
  explore: exploreReducer,
  repositories: repositoriesReducer,
});

export default rootReducer;
