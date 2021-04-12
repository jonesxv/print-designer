  
import {
  SET_DESIGN_NAME,
  SET_FAB_COLOR,
  SET_SHIRT_TYPE,
  SET_COLOR_ONE,
  SET_COLOR_TWO,
} from './actions';

export const initialState = {
  designName: undefined,
  fabColor: undefined,
  shirtType: undefined,
  color1: '#000000',
  color2: '#a71e31',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_DESIGN_NAME:
      return {
        ...state,
        designName: action.designName,
      };
    case SET_FAB_COLOR:
      return {
        ...state,
        fabColor: action.fabColor,
      };
    case SET_SHIRT_TYPE:
      return {
        ...state,
        shirtType: action.shirtType,
      };
    case SET_COLOR_ONE:
      return {
        ...state,
        color1: action.color1,
      };
    case SET_COLOR_TWO:
      return {
        ...state,
        color2: action.color2,
      };
    default:
      return state;
  }
};

export default appReducer;