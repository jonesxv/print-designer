import React from 'react';
import {
  SET_FAB_COLOR,
  SET_SHIRT_TYPE,
  SET_COLOR_ONE,
  SET_COLOR_TWO,
} from './actions';
import appReducer, { initialState } from './reducer';

const { Provider, Consumer } = React.createContext();

export { Consumer as AppConsumer };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const setFabColor = (fabColor) =>
    dispatch({
      type: SET_FAB_COLOR,
      fabColor,
    });
  const setShirtType = (shirtType) =>
    dispatch({
      type: SET_SHIRT_TYPE,
      shirtType,
    });
  const setColorOne = (color1) =>
    dispatch({
      type: SET_COLOR_ONE,
      color1,
    });
  const setColorTwo = (color2) =>
    dispatch({
      type: SET_COLOR_TWO,
      color2,
    });
  return (
    <Provider value={{
      ...state,
      setFabColor,
      setShirtType,
      setColorOne,
      setColorTwo
    }}>
      {children}
    </Provider>
  );
};