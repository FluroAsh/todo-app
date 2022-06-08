import { createContext, useContext } from 'react';

export const StateContext = createContext(); // for use in app.js
export const useGlobalState = () => useContext(StateContext); // used when calling from the Provider
