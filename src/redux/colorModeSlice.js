const initialState = {
  isDarkMode: false,
};

const SET_LIGHT_MODE = 'SET_LIGHT_MODE';
const SET_DARK_MODE = 'SET_DARK_MODE';
const SET_SYSTEM_MODE = 'SET_SYSTEM_MODE';
const TOGGLE_THEME = 'TOGGLE_THEME';

const colorModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIGHT_MODE:
      return {...state, isDarkMode: false};
    case SET_DARK_MODE:
      return {...state, isDarkMode: true};
    case SET_SYSTEM_MODE:
      return {...state, isDarkMode: null};
    case TOGGLE_THEME:
      return {...state, isDarkMode: !state.isDarkMode};
    default:
      return state;
  }
};

export default colorModeReducer;
