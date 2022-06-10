import React from 'react';
import { useGlobalState } from '../utils/stateContext';
import Task from './Task';
import thinkingEmoji from '../images/thinking-emoji.png';
/**
 * TODO:
 * - Add edit
 * - Add complete/incomplete
 * - Final touches
 * 1. Add framer motion
 * 2. Add text typing effect for header
 */
function TaskList() {
  const { store } = useGlobalState();
  // TODO: Fix BUG... When submitting form (TaskForm), causes:
  // - 'Uncaught TypeError: store is undefined'
  const { todos } = store;

  return todos.length > 0 ? (
    todos.map((todo, index) => (
      <div className="todo-row" key={index}>
        <Task key={todo.taskId} text={todo.text} todo={todo} />
      </div>
    ))
  ) : (
    <div className="no-tasks">
      <h3>No tasks yet!</h3>
      <img src={thinkingEmoji} alt="thinking-emoji" />
    </div>
  );
}

export default TaskList;
