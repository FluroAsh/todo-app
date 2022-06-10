import React, { useReducer } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.scss';
import { StateContext } from './utils/stateContext';
import { reducer } from './utils/reducer';
import { getLocalKeys } from './helpers/getLocalKeys';

const App = () => {
  const initialState = {
    todos: getLocalKeys(),
  };

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <div className="container">
        <h1>What's on your mind?</h1>
        <TaskForm />
        <TaskList />
      </div>
      <span id="copyright">© Copyright 2022 | Ashley Thompson</span>
    </StateContext.Provider>
  );
};

export default App;
