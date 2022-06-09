import React from 'react';
import {
  SET_COLOR_ONE,
  SET_COLOR_TWO,
  SET_DESIGN_NAME,
  SET_NAME,
  SET_FAB_COLOR,
  SET_SHIRT_TYPE,
  SET_SIZE
} from './actions';
import appReducer, { initialState } from './reducer';

export const store = React.createContext();
const { Provider, Consumer } = store;

export { Consumer as AppConsumer };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
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
  const setDesignName = (designName) => {
    dispatch({
      type: SET_DESIGN_NAME,
      designName,
    });
  }
  const setName = (name) =>
    dispatch({
      type: SET_NAME,
      name,
    });
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
  const setSize = (size) => {
    dispatch({
      type: SET_SIZE,
      size,
    });
  }
  return (
    <Provider value={{
      ...state,
      setColorOne,
      setColorTwo,
      setName,
      setDesignName,
      setFabColor,
      setShirtType,
      setSize
    }}>
      {children}
    </Provider>
  );
};