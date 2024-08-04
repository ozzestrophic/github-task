const initialState = {
  mode: 'dark',
};

const SET_COLOR_MODE = 'SET_COLOR_MODE';

const colorModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR_MODE:
      return {...state, mode: action.payload};
    default:
      return state;
  }
};

export default colorModeReducer;
