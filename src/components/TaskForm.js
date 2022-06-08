import React, { useState } from 'react';
import { useGlobalState } from '../utils/stateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TaskForm() {
  const { dispatch } = useGlobalState();
  const [input, setInput] = useState('');

  const createTaskId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { taskId: createTaskId(), text: input };

    if (!newTodo.text ) {
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

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
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
