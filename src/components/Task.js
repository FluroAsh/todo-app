import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../utils/stateContext';
import TaskForm from './TaskForm';

function Task({ text, todo }) {
  const initialState = {
    taskId: null,
    value: '',
  };

  const { store, dispatch } = useGlobalState();
  const { todos } = store;

  const [edit, setEdit] = useState(initialState);

  const removeTodo = () => {
    // iterate over array of objects, return array with no removed todo
    const removedArr = [...todos].filter((item) => item.taskId !== todo.id);

    dispatch({
      type: 'removeTodo',
      data: { removedArr, taskId: todo.id },
    });
  };

  const submitUpdate = () => {
    // console.log(value, 'Test');
    // setEdit(initialState);
    // dispatch editTodo
    // - which updates the current state todo & task in localStorage based on id
    // set to null after submission
  };

  const handleEdit = () => {
    // INPUT:
    // 1. Todo to be removed
    // 2.  Value (new value)
    dispatch({
      type: 'editTodo',
      data: { taskId: todo.taskId, text },
    });
    setEdit('');
  };

  console.log(edit, todo, todo.taskId);
  // if there edit.id is not null then render a task form in the row
  if (edit.taskId) {
    return <TaskForm edit={edit} onSubmit={handleEdit} />;
  }

  return (
    <>
      <div>{text}</div>
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
