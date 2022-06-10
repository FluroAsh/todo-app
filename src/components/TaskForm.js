import React, { useState } from 'react';
import { useGlobalState } from '../utils/stateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

function TaskForm(props) {
  const { dispatch } = useGlobalState();
  const [input, setInput] = useState('');
  // add an input state for edit form

  const createTaskId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newTodo = { taskId: createTaskId(), text: input };

    if (!newTodo.text) {
      let inputPlaceholder = e.target.childNodes[0].firstChild;
      inputPlaceholder.placeholder = 'Please enter a todo! 🤔';
      return;
    }

    dispatch({
      type: 'addTodo',
      data: newTodo,
    });

    setInput('');
  };

  const handleEditSubmit = (e) => {
    // send taskId & value to reducer to handle logic
    e.preventDefault();
    props.onSubmit(input);
  };

  const handleChange = (e) => {
    // dynamically assign value to edit state if edit is true
    // else continue to setinput for regular state
    setInput(e.target.value);
  };

  // if props.edit is true then display the edit form
  return props.edit ? (
    <form onSubmit={handleEditSubmit}>
      <div className="input-bar edit">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Edit your todo ✏️"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>
    </form>
  ) : (
    <form onSubmit={handleAddSubmit}>
      <div className="input-bar add">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a todo 🧙‍♂️"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
