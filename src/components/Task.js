import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../utils/stateContext';
import TaskForm from './TaskForm';

function Task({ todo }) {
  const initialState = {
    taskId: null,
    value: '',
  };

  const { store, dispatch } = useGlobalState();
  const { todos } = store;

  const [edit, setEdit] = useState(initialState);

  const removeTodo = () => {
    // iterate over array of objects, return array with no removed todo
    const removedArr = [...todos].filter((item) => item.taskId !== todo.taskId);

    dispatch({
      type: 'removeTodo',
      data: { removedArr, taskId: todo.taskId },
    });
  };

  const handleEdit = (input) => {
    const removedArr = [...todos].filter((item) => item.taskId !== todo.taskId);

    dispatch({
      type: 'editTodo',
      data: { removedArr, taskId: todo.taskId, input },
    });
    setEdit('');
  };

  // if edit.id is not null then render a task form in the row
  if (edit.taskId) {
    return <TaskForm edit={edit} onSubmit={handleEdit} />;
  }

  return (
    <>
      <div>{todo.text}</div>
      <div className="todo-row__icons">
        <FontAwesomeIcon
          icon={faPen}
          fixedWidth
          style={{ color: 'gold', fontSize: '1.4rem' }}
          onClick={() => setEdit({ taskId: todo.taskId, value: todo.text })}
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
