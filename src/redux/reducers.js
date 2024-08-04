import {combineReducers} from 'redux';
import exploreReducer from './exploreSlice';
import repositoriesReducer from './repositoriesSlice';
import colorModeReducer from './colorModeSlice';

const rootReducer = combineReducers({
  explore: exploreReducer,
  repositories: repositoriesReducer,
  colorMode: colorModeReducer,
});

export default rootReducer;
