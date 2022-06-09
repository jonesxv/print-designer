  
import {
  SET_COLOR_ONE,
  SET_COLOR_TWO,
  SET_DESIGN_NAME,
  SET_FAB_COLOR,
  SET_NAME,
  SET_SHIRT_TYPE,
  SET_SIZE
} from './actions';

export const initialState = {
  color1: '#000000',
  color2: '#a71e31',
  designName: undefined,
  fabColor: undefined,
  name: '',
  shirtType: undefined,
  size: ''
};

const appReducer = (state, action) => {
  switch (action.type) {
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
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_SHIRT_TYPE:
      return {
        ...state,
        shirtType: action.shirtType,
      };
    case SET_SIZE:
      return {
        ...state,
        size: action.size,
      };
    default:
      return state;
  }
};

export default appReducer;