import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../utils/stateContext';

// removing a task requires a dispatch HERE

function Task({ text, todo, editTodo }) {
  const { store, dispatch } = useGlobalState();
  const { todos } = store;

  const removeTodo = () => {
    // iterate over array of objects, return array with no removed todo
    const removedArr = [...todos].filter((item) => item.taskId !== todo.id);

    dispatch({
      type: 'removeTodo',
      data: { removedArr, taskId: todo.id },
    });
  };

  return (
    <>
      <div>{text}</div>
      <div className="todo-row__icons">
        <FontAwesomeIcon
          icon={faPen}
          fixedWidth
          style={{ color: 'gold', fontSize: '1.4rem' }}
        />
        <FontAwesomeIcon
          icon={faXmark}
          fixedWidth
          style={{ color: 'red' }}
          onClick={removeTodo}
        />
      </div>
    </>
  );
}

export default Task;
